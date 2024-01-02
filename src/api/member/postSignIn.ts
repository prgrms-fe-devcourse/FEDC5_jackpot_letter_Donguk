import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { Authentication } from '@/types/ResponseType';

export const postSignIn = async (signInData: object) => {
  const { data } = await axios.post<Authentication>('/api', {
    method: 'POST',
    url: END_POINTS.SIGNIN,
    data: signInData
  });
  return data;
};
