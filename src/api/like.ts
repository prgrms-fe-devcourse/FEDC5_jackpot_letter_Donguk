import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { Like } from '@/types/ResponseType';

/** 포스트 좋아요 */
export const postLikeCreate = async (JWTtoken: string, postId: string) => {
  const { data } = await axios.post<Like>('/api', {
    method: 'POST',
    url: END_POINTS.LIKE_CREATE,
    headers: {
      Authorization: `bearer ${JWTtoken}`
    },
    data: { postId }
  });

  return data;
};

/** 포스트 좋아요 취소 */
export const deleteLikeDelete = async (JWTtoken: string, id: string) => {
  const { data } = await axios.post<Like>('/api', {
    method: 'DELETE',
    url: END_POINTS.LIKE_DELETE,
    headers: {
      Authorization: `bearer ${JWTtoken}`
    },
    data: {
      id
    }
  });

  return data;
};
