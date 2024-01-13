import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { Comment, Like, Post } from '@/types/ResponseType';
import { axiosInstance } from './axiosInstance';

export const getAuthorPost = async (authorId: string) => {
  const { data } = await axiosInstance.get<Post[]>(
    `${END_POINTS.AUTHOR_POST_LIST}/${authorId}`,
    {
      authorization: false
    }
  );

  return data;
};

export const getChannelPost = async (channelId: string) => {
  const { data } = await axiosInstance.get<Post[]>(
    `${END_POINTS.CHANNEL_POST_LIST}/${channelId}`,
    {
      authorization: false
    }
  );

  return data;
};

/** 특정 채널에 포스트 작성하기. 아직 response data 아직 알 수 없음 */
export const postPostCreate = async (
  title: string,
  content: string,
  image: string | null,
  channelId: string,
  color: string
) => {
  const { data } = await axiosInstance.post(END_POINTS.POST_CREATE, {
    title: JSON.stringify({
      title,
      content,
      color
    }),
    image,
    channelId
  });

  return data;
};

/** 특정 포스트 상세 보기 */
export const getPostDetail = async (postId: string) => {
  const { data } = await axiosInstance.get<Post>(
    `${END_POINTS.POSTS}/${postId}`
  );

  return data;
};

/** 내가 작성한 포스트 수정하기. response data 아직 알 수 없음 */
export const postPostUpdate = async (
  postId: string,
  title: string,
  content: string,
  image: string | null,
  imageToDeletePublicId = '',
  channelId: string
) => {
  console.log(postId, title, content, image, imageToDeletePublicId, channelId);
  await axiosInstance.put<void>(END_POINTS.POST_UPDATE, {
    data: {
      postId,
      title: JSON.stringify({
        title,
        content
      }),
      image,
      imageToDeletePublicId,
      channelId
    }
  });
};

/** 내가 작성한 포스트 삭제하기 */
export const postPostDelete = async (id: string) => {
  const { data } = await axiosInstance.delete<void>(END_POINTS.POST_DELETE, {
    data: {
      id
    }
  });

  return data;
};

/** 특정 포스트에 좋아요 */
export const postPostLikeCreate = async (JWTtoken: string, postId: string) => {
  const { data } = await axios.post<Like>('/api', {
    method: 'POST',
    url: END_POINTS.POST_LIKE_CREATE,
    headers: {
      Authorization: `bearer ${JWTtoken}`
    },
    data: {
      postId
    }
  });

  return data;
};

/** 특정 포스트 좋아요 취소 */
export const postPostLikeDelete = async (JWTtoken: string, id: string) => {
  const { data } = await axios.post<Like>('/api', {
    method: 'DELETE',
    url: END_POINTS.POST_LIKE_DELETE,
    headers: {
      Authorization: `bearer ${JWTtoken}`
    },
    data: {
      id
    }
  });

  return data;
};

/** 특정 포스트에 댓글 달기 */
export const postPostCommentCreate = async (
  title: string,
  comment: string,
  postId: string
) => {
  const { data } = await axiosInstance.post<Comment>(
    END_POINTS.POST_COMMENT_CREATE,
    {
      comment: JSON.stringify({
        title,
        comment
      }),
      postId
    }
  );

  return data;
};

/** 특정 포스트에 작성한 내 댓글 지우기 */
export const postPostCommentDelete = async (id: string) => {
  const { data } = await axiosInstance.delete<Comment>(
    END_POINTS.POST_COMMENT_DELETE,
    {
      data: {
        id
      }
    }
  );

  return data;
};
