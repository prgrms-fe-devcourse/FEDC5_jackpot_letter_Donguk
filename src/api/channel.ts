import toast from 'react-hot-toast';
import { MutationProps } from '@/hooks/api/useNewChannel';
import { END_POINTS } from '@/constants/api';
import { axiosInstance } from './axiosInstance';

export const getChannelList = async () => {
  const { data } = await axiosInstance.get(END_POINTS.CHANNEL, {
    authorization: false
  });
  return data;
};

export const getChannel = async (channelName: string) => {
  const { data } = await axiosInstance.get(
    `${END_POINTS.CHANNEL}/${channelName}`,
    {
      authorization: false
    }
  );
  return data;
};

export const createChannel = async (channelOption: MutationProps) => {
  const { data: adminLogin } = await axiosInstance.post(END_POINTS.SIGNIN, {
    email: import.meta.env.VITE_ADMIN_EMAIL_KEY,
    password: import.meta.env.VITE_ADMIN_PASSWORD_KEY
  });

  if (!adminLogin)
    return toast.error('채널을 생성하는 권한을 부여받지 못했습니다.');
  const { data } = await axiosInstance.post(
    END_POINTS.CREATE_CHANNEL,
    channelOption,
    {
      authorization: false,
      headers: {
        Authorization: `Bearer ${adminLogin.token}`
      }
    }
  );
  return data;
};

export const getChannelPosts = async (channelId: string) => {
  const { data } = await axiosInstance.get(
    `${END_POINTS.CHANNEL_POST}/${channelId}`,
    {
      authorization: false
    }
  );
  return data;
};
