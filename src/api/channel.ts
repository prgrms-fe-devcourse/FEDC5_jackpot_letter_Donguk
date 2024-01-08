import toast from 'react-hot-toast';
import axios from 'axios';
import { MutationProps } from '@/hooks/api/useNewChannel';
import { END_POINTS } from '@/constants/api';

export const getChannelList = async () => {
  const { data } = await axios.post('/api', {
    method: 'GET',
    url: END_POINTS.CHANNEL
  });
  return data;
};

export const getChannel = async (channelId: string) => {
  const { data } = await axios.post('/api', {
    method: 'GET',
    url: `${END_POINTS.CHANNEL}/${channelId}`
  });

  return data;
};

export const createChannel = async (channelOption: MutationProps) => {
  const { data: adminLogin } = await axios.post('/api', {
    method: 'POST',
    url: END_POINTS.SIGNIN,
    data: {
      email: import.meta.env.VITE_ADMIN_EMAIL_KEY,
      password: import.meta.env.VITE_ADMIN_PASSWORD_KEY
    }
  });
  console.log('adminLogin', adminLogin);
  if (!adminLogin)
    return toast.error('채널을 생성하는 권한을 부여받지 못했습니다.');
  console.log(adminLogin.token, channelOption, END_POINTS.CREATE_CHANNEL);

  const { data } = await axios.post('/api', {
    method: 'POST',
    url: END_POINTS.CREATE_CHANNEL,
    data: channelOption,
    headers: { Authorization: `Bearer ${adminLogin.token}` }
  });
  return data;
};
