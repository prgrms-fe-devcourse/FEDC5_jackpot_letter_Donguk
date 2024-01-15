import { END_POINTS } from '@/constants/api';
import { Authentication, AuthenticationUser } from '@/types/ResponseType';
import { axiosInstance } from './axiosInstance';

export const getConfirmAuth = async () => {
  const { data } = await axiosInstance.get<AuthenticationUser>(
    END_POINTS.AUTH_USER
  );
  return data;
};

export const signUp = async (signUpData: object) => {
  const { data } = await axiosInstance.post<Authentication>(
    END_POINTS.SIGNUP,
    signUpData,
    {
      authorization: false
    }
  );

  return data;
};

export const signIn = async (signInData: object) => {
  const { data } = await axiosInstance.post<Authentication>(
    END_POINTS.SIGNIN,
    signInData,
    {
      authorization: false
    }
  );
  return data;
};

export const signOut = async () => {
  const { data } = await axiosInstance.post(END_POINTS.SIGNOUT);

  return data;
};
