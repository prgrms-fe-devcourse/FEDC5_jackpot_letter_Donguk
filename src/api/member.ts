import { END_POINTS } from '@/constants/api';
import { Authentication, AuthenticationUser } from '@/types/ResponseType';
import { axiosInstance } from './axiosInstance';

export interface PostSignIn extends Authentication {
  signInData: object;
}

export const getConfirmAuth = async () => {
  const { data } = await axiosInstance.get<AuthenticationUser>(
    END_POINTS.AUTH_USER
  );
  return data;
};

export const postSignUp = async (signUpData: object) => {
  const { data } = await axiosInstance.post<Authentication>(
    END_POINTS.SIGNUP,
    signUpData,
    {
      authorization: false
    }
  );

  return data;
};

export const postSignIn = async (signInData: object) => {
  const { data } = await axiosInstance.post<Authentication>(
    '/login',
    signInData,
    {
      authorization: false
    }
  );
  return data;
};

export const getUserList = async () => {
  const { data } = await axiosInstance.get<AuthenticationUser[]>(
    END_POINTS.USER_LIST,
    {
      authorization: false
    }
  );
  return data;
};
