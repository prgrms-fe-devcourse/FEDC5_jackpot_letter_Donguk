import { END_POINTS } from '@/constants/api';
import { User } from '@/types/ResponseType';
import { axiosInstance } from './axiosInstance';

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
