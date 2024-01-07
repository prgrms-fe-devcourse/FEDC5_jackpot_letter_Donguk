import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { Authentication, AuthenticationUser, User } from '@/types/ResponseType';

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

export const getUserList = async () => {
  const { data } = await axios.post<AuthenticationUser[]>('/api', {
    method: 'GET',
    url: END_POINTS.USER_LIST
  });
  return data;
};

export const getUserInfomation = async (userId: string) => {
  const { data } = await axios.post<User>('/api', {
    method: 'GET',
    url: `${END_POINTS.USER_INFOMATION}/${userId}`
  });

  return data;
};
