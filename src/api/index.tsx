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

export async function requestAPI({
  method,
  path,
  params,
  headers,
  data
}: requestAPIProps) {
  const responseData = await axios.post<string, string>('/api/get', {
    method,
    path,
    params,
    headers,
    data
  });

  return responseData;
}
