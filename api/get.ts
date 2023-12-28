import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

const { API_ENDPOINT } = process.env;

export default async function (req: VercelRequest, res: VercelResponse) {
  const { path } = req.body;
  console.log(req);

  const { data } = await axios({
    method: 'GET',
    url: `${API_ENDPOINT}${path}`
  });

  res.status(200).json(data);
}
