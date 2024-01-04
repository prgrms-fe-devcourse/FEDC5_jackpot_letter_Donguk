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
