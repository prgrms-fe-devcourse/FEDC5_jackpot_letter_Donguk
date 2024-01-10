import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { User } from '@/types/ResponseType';
import { getStorage } from '@/utils/LocalStorage';

const ACCESS_TOKEN = getStorage('ACCESS_TOKEN', '');

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
    url: `${END_POINTS.UPDATE_USER}`,
    data: { password },
    headers
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
