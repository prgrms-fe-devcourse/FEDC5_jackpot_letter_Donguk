import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { User } from '@/types/ResponseType';

export const getUser = async (userId: string) => {
  const { data } = await axios.post<User>('/api', {
    method: 'GET',
    url: `${END_POINTS.USER}/${userId}`
  });

  return data;
};

export const updateUser = async <T>(fullName: string, headers: T) => {
  const { data } = await axios.post<User>('/api', {
    method: 'PUT',
    url: `${END_POINTS.UPDATE_USER}`,
    data: { fullName },
    headers
  });

  return data;
};

export const updatePassword = async <T>(password: string, headers: T) => {
  const { data } = await axios.post<User>('/api', {
    method: 'PUT',
    url: `${END_POINTS.UPDATE_PASSWORD}`,
    data: { password },
    headers
  });

  return data;
};

export const updateUserPhoto = async <T>(
  headers: T,
  isCover: boolean,
  image: File
) => {
  const formData = new FormData();
  formData.append('isCover', String(isCover));
  formData.append('image', image);

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { data } = await axios.post(
    `${BASE_URL}${END_POINTS.UPLOAD_PHOTO}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...headers
      }
    }
  );

  return data;
};
