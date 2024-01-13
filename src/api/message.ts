import { END_POINTS } from '@/constants/api';
import { Conversation, Message } from '@/types/ResponseType';
import { axiosInstance } from './axiosInstance';

/** 특정 사용자와 소통한 메시지 목록 */
export const getMessages = async (userId: string) => {
  const { data } = await axiosInstance.get<Message[]>(END_POINTS.MESSAGES, {
    params: { userId }
  });

  return data;
};

/** 특정 사용자에게 메세지 전송 */
export const postMessagesCreate = async (
  // JWTtoken: string,
  message: string,
  receiver: string
) => {
  const { data } = await axiosInstance.post<Message>(
    END_POINTS.MESSAGES_CREATE,
    {
      message,
      receiver
    }
  );

  return data;
};

/** 특정 사용자와 소통한 메시지 목록 */
export const getMessageConversations = async () => {
  const { data } = await axiosInstance.get<Conversation[]>(
    END_POINTS.MESSAGES_CONVERSATIONS
  );
  return data;
};

/** 특정 사용자와 나눈 메시지 읽음처리 */
export const putMessageUpdateSeen = async (sender: string) => {
  await axiosInstance.put<void>(END_POINTS.MESSAGES_UPDATE_SEEN, {
    sender
  });
};
