import { END_POINTS } from '@/constants/api';
import { Follow } from '@/types/ResponseType';
import { axiosInstance } from './axiosInstance';

export const deleteFollow = async (id: string) => {
  const { data } = await axiosInstance.delete<Follow>(
    END_POINTS.DELETE_FOLLOW,
    {
      data: { id }
    }
  );

  return data;
};

export const createFollow = async (userId: string) => {
  const { data } = await axiosInstance.post<Follow>(END_POINTS.CREATE_FOLLOW, {
    userId: userId
  });
  return data;
};
