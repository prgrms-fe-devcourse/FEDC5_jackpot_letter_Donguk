export const END_POINTS = {
  SIGNIN: '/login',
  SIGNUP: '/signup',
  AUTH_USER: '/auth-user',
  USER_LIST: '/users/get-users',
  POST_CREATE: '/posts/create',
  /** postId 필요 */
  POSTS: '/posts/',
  POST_UPDATE: '/posts/update',
  POST_DELETE: '/posts/delete',
  POST_LIKE_CREATE: '/likes/create',
  POST_LIKE_DELETE: '/likes/delete',
  POST_COMMENT_CREATE: './comments/create',
  POST_COMMENT_DELETE: '/comments/delete',
  CREATE_CHANNEL: '/channels/create',
  CHANNEL: '/channels'
};

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
export const ACCESS_USER_ID = 'ACCESS_USER_ID';
export const ACCESS_CHANNEL_NAME = 'ACCESS_CHANNEL_NAME';

