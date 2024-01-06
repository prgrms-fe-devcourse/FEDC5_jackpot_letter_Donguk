import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { Follow } from '@/types/ResponseType';

export const deleteFollow = async <T>(id: string, headers: T) => {
  const { data } = await axios.post<Follow>('/api', {
    method: 'DELETE',
    url: `${END_POINTS.DELETE_FOLLOW}`,
    data: { id },
    headers
  });

  return data;
};

export const createFollow = async <T>(userId: string, headers: T) => {
  const { data } = await axios.post<Follow>('/api', {
    method: 'POST',
    url: `${END_POINTS.CREATE_FOLLOW}`,
    data: { userId },
    headers
  });

  return data;
};
