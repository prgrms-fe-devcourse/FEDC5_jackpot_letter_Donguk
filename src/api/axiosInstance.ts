import axios, { AxiosError } from 'axios';
import {
  ACCESS_TOKEN_KEY,
  ERROR_MESSAGE,
  INTERNAL_SERVER_ERROR
} from '@/constants/api';
import { getStorage } from '@/utils/LocalStorage';
import { HTTPError } from './HTTPError';

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  customMessage?: string;
}
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  authorization: true
});

axiosInstance.interceptors.request.use((config) => {
  if (!config.authorization) return config;

  const token = getStorage(ACCESS_TOKEN_KEY);

  if (!token) {
    throw new Error('토큰이 유효하지 않습니다');
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<string>) => {
    if (!error.response) throw error;

    const { data: message, status: statusCode } = error.response;
    const customMessage = getCustomMessage(message);
    console.log(statusCode, message, customMessage);
    console.log(error);
    if (statusCode >= INTERNAL_SERVER_ERROR) {
      throw error;
    }
    throw new HTTPError(statusCode, customMessage, message);
  }
);

const getCustomMessage = (data: string): string => {
  return (
    Object.entries(ERROR_MESSAGE).find(([message]) => message === data)?.[1] ||
    'default error message'
  );
};
