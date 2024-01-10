import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

interface RequestType<T> {
  method: 'GET' | 'POST';
  url: string;
  data?: T;
  params: Record<string, string>;
  headers?: Record<string, string>;
}

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL
});

export default async function request<T>(
  req: VercelRequest,
  res: VercelResponse
) {
  const { method, url, data, headers } = req.body as RequestType<T>;
  try {
    const { data: responseData } = await axiosInstance({
      method,
      url,
      data,
      headers: { ...headers }
    });

    res.status(200).json(responseData);
  } catch (error) {
    //에러핸들링 interceptor
    res.status(500).json({ message: error });
    throw new Error('Internal Server Error');
  }
}
