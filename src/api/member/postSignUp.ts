import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { Authentication } from '@/types/ResponseType';

export const postSignUp = async (signUpData: object) => {
  const { data } = await axios.post<Authentication>('/api', {
    method: 'POST',
    url: END_POINTS.SIGNUP,
    data: signUpData
  });
  return data;
};
