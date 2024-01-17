import * as Sentry from '@sentry/react';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import {
  ACCESS_TOKEN_KEY,
  ERROR_MESSAGE,
  HTTP_STATUS_CODE
} from '@/constants/api';
import { getStorage } from '@/utils/LocalStorage';
import { HttpStatusCode } from '.';
import { HTTPError } from './HTTPError';

export const setToken = (config: InternalAxiosRequestConfig) => {
  if (!config.authorization) return config;

  const token = getStorage(ACCESS_TOKEN_KEY);

  if (!token) {
    throw new Error('토큰이 유효하지 않습니다');
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
};

export const responseError = async (error: AxiosError<string>) => {
  if (!error.response) throw error;

  Sentry.captureException(error);

  const { data: message, status: statusCode } = error.response;
  const customMessage = getCustomMessage(message);

  if (statusCode >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw error;
  }
  throw new HTTPError(statusCode as HttpStatusCode, customMessage);
};

const getCustomMessage = (data: string) => {
  return (
    Object.entries(ERROR_MESSAGE).find(([message]) => message === data)?.[1] ||
    'default error message'
  );
};
