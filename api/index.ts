import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

interface RequestType {
  method: 'GET' | 'POST';
  url: string;
  headers?: {
    Authorization: string;
  };
  data?: string | { [key: string]: string };
  params: string;
}

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL
});

export default async function request(req: VercelRequest, res: VercelResponse) {
  const { method, url, headers, data } = req.body as RequestType;
  console.log(method, url);
  try {
    const { data: responseData } = await axiosInstance({
      method,
      url,
      headers,
      data
    });
    res.status(200).json(responseData);
  } catch (error) {
    //에러핸들링 interceptor
    res.status(500).json({ message: error });
    throw new Error('Internal Server Error');
  }
}
