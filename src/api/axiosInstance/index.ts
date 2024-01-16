import { ERROR_MESSAGE, HTTP_STATUS_CODE } from '@/constants/api';

export type Message =
  | (typeof ERROR_MESSAGE)[keyof typeof ERROR_MESSAGE]
  | 'default error message';

export type HttpStatusCode =
  (typeof HTTP_STATUS_CODE)[keyof typeof HTTP_STATUS_CODE];

export interface ErrorResponseData {
  statusCode?: HttpStatusCode;
  message?: Message;
}
