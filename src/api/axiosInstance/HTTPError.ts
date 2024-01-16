import { HttpStatusCode, Message } from '.';

export class HTTPError extends Error {
  statusCode: HttpStatusCode;

  constructor(statusCode: HttpStatusCode, customMessage: Message) {
    super(customMessage);

    this.name = 'HTTPError';
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}
