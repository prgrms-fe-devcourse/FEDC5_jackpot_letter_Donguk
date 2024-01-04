import toast from 'react-hot-toast';
import axios from 'axios';
import { END_POINTS } from '@/constants/api';

export const getChannelList = async () => {
  const { data } = await axios.post('/api', {
    method: 'GET',
    url: '/channels'
  });
  return data;
};

export const getChannel = async (channelId: string) => {
  const { data } = await axios.post('/api', {
    method: 'GET',
    url: `/channels/${channelId}`
  });

  return data;
};

export const createChannel = async (channelOption: object) => {
  const { data: adminLogin } = await axios.post('/api', {
    method: 'POST',
    url: 'login',
    data: { email: 'admin@programmers.co.kr', password: 'programmers' }
  });

  if (!adminLogin)
    return toast.error('채널을 생성하는 권한을 부여받지 못했습니다.');

  const { data } = await axios.post('/api', {
    method: 'POST',
    url: END_POINTS.CREATE_CHANNEL,
    data: channelOption,
    headers: { Authorization: `Bearer ${adminLogin.token}` }
  });
  return data;
};
