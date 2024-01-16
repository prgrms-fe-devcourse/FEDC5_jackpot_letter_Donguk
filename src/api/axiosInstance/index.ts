import axios from 'axios';
import { ERROR_MESSAGE, HTTP_STATUS_CODE } from '@/constants/api';
import { responseError, setToken } from './interceptors';

export type Message =
  | (typeof ERROR_MESSAGE)[keyof typeof ERROR_MESSAGE]
  | 'default error message';

export type HttpStatusCode =
  (typeof HTTP_STATUS_CODE)[keyof typeof HTTP_STATUS_CODE];

export interface ErrorResponseData {
  statusCode?: HttpStatusCode;
  message?: Message;
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  authorization: true
});

axiosInstance.interceptors.request.use(setToken);

axiosInstance.interceptors.response.use((response) => response, responseError);
