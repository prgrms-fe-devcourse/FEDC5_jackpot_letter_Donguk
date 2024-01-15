import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { User } from '@/types/ResponseType';

export const getUserInfomation = async (userId: string) => {
  // 로컬 스토리지에 ACCESS_ID가 비어있을 경우
  if (!userId) return false;

  const { data } = await axios.post<User>('/api', {
    method: 'GET',
    url: `${END_POINTS.USER_INFOMATION}/${userId}`
  });

  return data;
};
