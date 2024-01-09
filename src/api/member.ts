import { END_POINTS } from '@/constants/api';
import { Authentication, AuthenticationUser, User } from '@/types/ResponseType';
import { axiosInstance } from './axiosInstance';

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
    END_POINTS.SIGNIN,
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

export const getUserInfomation = async (userId: string) => {
  // 로컬 스토리지에 ACCESS_ID가 비어있을 경우
  if (!userId) return false;

  const { data } = await axios.post<User>('/api', {
    method: 'GET',
    url: `${END_POINTS.USER_INFOMATION}/${userId}`
  });

  return data;
};
