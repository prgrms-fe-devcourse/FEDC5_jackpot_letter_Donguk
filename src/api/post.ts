import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { Post } from '@/types/ResponseType';

export const getPost = async (postId: string) => {
  const { data } = await axios.post<Post>('/api', {
    method: 'GET',
    url: `${END_POINTS.POSTS}/${postId}`
  });

  return data;
};
