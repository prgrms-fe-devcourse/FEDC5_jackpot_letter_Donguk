import type { VercelRequest, VercelResponse } from '@vercel/node';
import { PostApi } from '../src/api/post.ts';
import { ResponseType } from '../src/api/post.ts';

export default async function getMovies(
  req: VercelRequest,
  res: VercelResponse
) {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const PORT = process.env.REACT_APP_PORT;

  const postApi = new PostApi(`${BASE_URL}:${PORT}`);

  const { method, path, limit, offset, title, channelId, image } = req.body;

  let responseValue: ResponseType;

  try {
    if (method === 'get') {
      responseValue = await postApi.getPosts(channelId, path, limit, offset);
    } else {
      responseValue = await postApi.createPosts(path, channelId, title, image);
    }

    if (responseValue.status === 200) {
      return res.status(200).json(responseValue.data);
    } else {
      return res.status(400);
    }
  } catch (error) {
    res.status(500).json({ message: error });
    throw new Error('Error');
  }
}
