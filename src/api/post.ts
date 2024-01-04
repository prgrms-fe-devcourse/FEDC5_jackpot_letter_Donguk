import axios from 'axios';
import { END_POINTS } from '@/constants/api';
import { Comment, Like, Post } from '@/types/ResponseType';

/** 특정 채널에 포스트 작성하기. 아직 response data 아직 알 수 없음 */
export const postPostCreate = async (
  JWTtoken: string,
  title: string,
  image: string | null,
  channelId: string
) => {
  const { data } = await axios.post('/api', {
    method: 'POST',
    url: END_POINTS.POST_CREATE,
    headers: {
      Authorization: `bearer ${JWTtoken}`
    },
    data: {
      title,
      image,
      channelId
    }
  });

  return data;
};

/** 특정 포스트 상세 보기 */
export const getPostDetail = async (postId: string) => {
  const { data } = await axios.get<Post>('/api', {
    method: 'GET',
    url: END_POINTS.POSTS + postId
  });

  return data;
};

/** 내가 작성한 포스트 수정하기. response data 아직 알 수 없음 */
export const postPostUpdate = async (
  JWTtoken: string,
  postId: string,
  title: string,
  image: string | null,
  imageToDeletePublicId = '',
  channelId: string
) => {
  const { data } = await axios.post('/api', {
    method: 'PUT',
    url: END_POINTS.POST_UPDATE,
    headers: {
      Authorization: `bearer ${JWTtoken}`
    },
    data: {
      postId,
      title,
      image,
      imageToDeletePublicId,
      channelId
    }
  });

  return data;
};

/** 내가 작성한 포스트 삭제하기 */
export const postPostDelete = async (JWTtoken: string, id: string) => {
  const { data } = await axios.post('/api', {
    method: 'DELETE',
    url: END_POINTS.POST_DELETE,
    headers: {
      Authorization: `bearer ${JWTtoken}`
    },
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
  JWTtoken: string,
  comment: string,
  postId: string
) => {
  const { data } = await axios.post<Comment>('/api', {
    method: 'POST',
    url: END_POINTS.POST_COMMENT_CREATE,
    headers: {
      Authorization: `bearer ${JWTtoken}`
    },
    data: {
      comment,
      postId
    }
  });

  return data;
};

/** 특정 포스트에 작성한 내 댓글 지우기 */
export const postPostCommentDelete = async (JWTtoken: string, id: string) => {
  const { data } = await axios.post<Comment>('/api', {
    method: 'DELETE',
    url: END_POINTS.POST_COMMENT_DELETE,
    headers: {
      Authorization: `bearer ${JWTtoken}`
    },
    data: {
      id
    }
  });

  return data;
};
