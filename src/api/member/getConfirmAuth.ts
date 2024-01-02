import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { AuthenticationUser } from '@/types/ResponseType';

export const getConfirmAuth = async () => {
  const { data } = await axios.post<AuthenticationUser>('/api/auth', {
    method: 'GET',
    url: END_POINTS.AUTH_USER
  });
  return data;
};
