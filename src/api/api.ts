import axios, { AxiosInstance } from 'axios';

const TOKEN = process.env.REACT_APP_TOKEN;

declare module 'axios' {
  interface AxiosResponse<T> extends Promise<T> {}
}

interface ApiType<T, U> {
  url: string;
  data?: T;
  headers?: U;
}

export default class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL
    });

    this.addAuthInterceptor(this.axiosInstance);
    this.addErrorInterceptor(this.axiosInstance);
  }

  protected addAuthInterceptor(instance: AxiosInstance): void {
    // 요청하는 부분에서 가로채서 토큰 넣기
    instance.interceptors.request.use(
      async (config) => {
        config.headers.Authorization = `Bearer ${TOKEN}`;
        return config;
      },
      async (error) => {
        return await Promise.reject(error);
      }
    );
  }

  protected addErrorInterceptor(instance: AxiosInstance): void {
    // 요청 받는 부분에서 가로채서 error 처리
    instance.interceptors.response.use(
      (response) => {
        // 성공한 응답 처리
        if (response.status !== 200) {
          throw new Error('error');
        }
        return response;
      },
      (error) => {
        // 에러 응답 처리
        console.log('api 요청 실패');
        if (error.response) {
          // 서버에서 응답이 왔지만 응답 상태 코드가 에러인 경우
          console.error(
            'Error response:',
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          // 요청을 보냈지만 응답이 없는 경우
          console.log('No response received1:', error);

          console.error('No response received:', error.message);
        } else {
          // 요청을 보내기 전에 에러가 발생한 경우
          console.error('Request error:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  public get<T, U>({ url, data, headers }: ApiType<T, U>) {
    return this.axiosInstance.get(url, {
      params: data,
      headers: { ...headers }
    });
  }

  public post<T, U>({ url, data, headers }: ApiType<T, U>) {
    return this.axiosInstance.post(url, data, {
      headers: { ...headers }
    });
  }

  public put<T, U>({ url, data, headers }: ApiType<T, U>) {
    return this.axiosInstance.put(url, data, {
      headers: { ...headers }
    });
  }

  public delete<T, U>({ url, data, headers }: ApiType<T, U>) {
    return this.axiosInstance.get(url, {
      data,
      headers: { ...headers }
    });
  }
}
