import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    authorization?: boolean;
  }
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

declare global {
  interface ObjectConstructor {
    entries<T extends object>(o: T): Entries<T>;
  }
}
