import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const { API_ENDPOINT } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  const { method, path, params = {}, headers = {}, data = {} } = req.body;

  const { data: responseData } = await axios({
    method,
    url: `${API_ENDPOINT}${path}`,
    params,
    headers,
    data
  });

  res.status(200).json(responseData);
}
