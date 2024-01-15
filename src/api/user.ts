import axios from 'axios';
import { NewNotificationProps } from '@/hooks/api/useCreateNotification';
import { END_POINTS } from '@/constants/api';
import { AuthenticationUser, User } from '@/types/ResponseType';
import { getStorage } from '@/utils/LocalStorage';
import { NewNotificationProps } from '@/hooks/api/useCreateNotification';
import { END_POINTS } from '@/constants/api';
import { AuthenticationUser, User } from '@/types/ResponseType';
import { axiosInstance } from './axiosInstance';

export const getUser = async (userId: string) => {
  if (!userId) return false;

  const { data } = await axiosInstance.get<User>(
    `${END_POINTS.USER}/${userId}`,
    { authorization: false }
  );

  return data;
};

export const updateUser = async (fullName: string) => {
  const { data } = await axiosInstance.put<User>(END_POINTS.UPDATE_USER, {
    fullName
  });

  return data;
};

export const updatePassword = async (password: string) => {
  const { data } = await axiosInstance.put<User>(END_POINTS.UPDATE_PASSWORD, {
    password
  });

  return data;
};
export const getNotifications = async () => {
  const { data } = await axiosInstance.get(END_POINTS.NOTIFICATION);
  return data;
};

export const updateUserPhoto = async (isCover: boolean, image: File) => {
  const formData = new FormData();
  formData.append('isCover', String(isCover));
  formData.append('image', image);

  const { data } = await axiosInstance.post(END_POINTS.UPLOAD_PHOTO, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return data;
};

export const checkNotifications = async () => {
  const { data } = await axiosInstance.put(END_POINTS.PUT_NOTIFICATION);
  return data;
};

/** 알림 확인 처리 */
export const updateNotification = async () => {
  await axiosInstance.put<void>(END_POINTS.PUT_NOTIFICATION);
};

/** 알림 생성 */
export const createNotification = async (
  notificationOption: NewNotificationProps
) => {
  const { data } = await axiosInstance.post(
    END_POINTS.POST_NOTIFICATION,
    notificationOption
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

/** 유저 온라인 정보 */
export const getUserOnline = async () => {
  const { data } = await axiosInstance.get<User[]>(END_POINTS.USER_ONLINE, {
    authorization: false
  });
  return data;
};
