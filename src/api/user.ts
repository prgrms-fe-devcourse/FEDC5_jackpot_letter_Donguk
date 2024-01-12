import axios from 'axios';
import { NewNotificationProps } from '@/hooks/api/useNewNotification';
import { END_POINTS } from '@/constants/api';
import { User } from '@/types/ResponseType';
import { getStorage } from '@/utils/LocalStorage';
import { axiosInstance } from './axiosInstance';

const ACCESS_TOKEN = getStorage('ACCESS_TOKEN', '');

export const getUser = async (userId: string) => {
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
  const { data } = await axios.post('/api', {
    method: 'GET',
    url: END_POINTS.NOTIFICATION,
    headers: {
      Authorization: `bearer ${ACCESS_TOKEN}`
    }
  });
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

export const checkNotification = async () => {
  const { data } = await axiosInstance.put(END_POINTS.PUT_NOTIFICATION);
  return data;
};

export const createNotification = async (
  notificationOption: NewNotificationProps
) => {
  const { data } = await axiosInstance.post(
    END_POINTS.POST_NOTIFICATION,
    notificationOption
  );
  return data;
};
