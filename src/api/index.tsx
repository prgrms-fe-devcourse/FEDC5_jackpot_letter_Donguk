import axios from 'axios';

interface requestAPIProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  params?: {
    [key: string]: string;
  };
  headers?: {
    [key: string]: string;
  };
  data?: {
    [key: string]: string;
  };
}

interface responseData {
  [key: string]: unknown;
}

export async function requestAPI({
  method,
  path,
  params,
  headers,
  data
}: requestAPIProps) {
  const response = await axios
    .post<responseData, responseData>('/api/get', {
      method,
      path,
      params,
      headers,
      data
    })
    .catch((err) => console.error(err));

  return response;
}
