import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { Message } from '@/types/ResponseType';

/** 특정 사용자와 소통한 메시지 목록 */
export const getMessages = async (JWTtoken: string, userId: string) => {
  const { data } = await axios.post<Message[]>('/api', {
    method: 'GET',
    url: `${END_POINTS.MESSAGES}`,
    headers: {
      Authorization: `Bearer ${JWTtoken}`
    },
    params: {
      userId
    }
  });

  return data;
};

/** 특정 사용자에게 메세지 전송 */
export const postMessagesCreate = async (
  JWTtoken: string,
  message: string,
  receiver: string
) => {
  const { data } = await axios.post<Message>('/api', {
    method: 'POST',
    url: `${END_POINTS.MESSAGES_CREATE}`,
    headers: {
      Authorization: `Bearer ${JWTtoken}`
    },
    data: {
      message,
      receiver
    }
  });

  return data;
};
