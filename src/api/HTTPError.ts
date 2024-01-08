export class HTTPError extends Error {
  statusCode: number;
  customMessage: string;

  constructor(statusCode: number, customMessage: string, message?: string) {
    super(message);

    this.name = 'HTTPError';
    this.statusCode = statusCode;
    this.customMessage = customMessage;

    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}
