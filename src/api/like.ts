import { END_POINTS } from '@/constants/api';
import { Like } from '@/types/ResponseType';
import { axiosInstance } from './axiosInstance';

/** 포스트 좋아요 */
export const postLikeCreate = async (postId: string) => {
  const { data } = await axiosInstance.post<Like>(END_POINTS.LIKE_CREATE, {
    postId
  });

  return data;
};

/** 포스트 좋아요 취소 */
export const deleteLikeDelete = async (id: string) => {
  const { data } = await axiosInstance.delete<Like>(END_POINTS.LIKE_DELETE, {
    data: {
      id
    }
  });

  return data;
};
