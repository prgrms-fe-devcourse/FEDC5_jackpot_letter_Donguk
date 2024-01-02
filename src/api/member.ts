import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { Authentication, AuthenticationUser } from '@/types/ResponseType';

export const getConfirmAuth = async () => {
  const { data } = await axios.post<AuthenticationUser>('/api/auth', {
    method: 'GET',
    url: END_POINTS.AUTH_USER
  });
  return data;
};

export const postSignUp = async (signUpData: object) => {
  const { data } = await axios.post<Authentication>('/api', {
    method: 'POST',
    url: END_POINTS.SIGNUP,
    data: signUpData
  });
  return data;
};

export const postSignIn = async (signInData: object) => {
  const { data } = await axios.post<Authentication>('/api', {
    method: 'POST',
    url: END_POINTS.SIGNIN,
    data: signInData
  });
  return data;
};
