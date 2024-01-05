import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { User } from '@/types/ResponseType';

export const getUser = async (userId: string) => {
  const { data } = await axios.post<User>('/api', {
    method: 'GET',
    url: `${END_POINTS.USER}/${userId}`
  });

  return data;
};

export const updateUser = async <T>(fullName: string, headers: T) => {
  const { data } = await axios.post<User>('/api', {
    method: 'PUT',
    url: `${END_POINTS.UPDATE_USER}`,
    data: { fullName },
    headers
  });

  return data;
};
