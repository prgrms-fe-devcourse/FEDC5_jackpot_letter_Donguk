export const END_POINTS = {
  SIGNIN: '/login',
  SIGNUP: '/signup',
  AUTH_USER: '/auth-user',
  USER_LIST: '/users/get-users',
  USER: '/users',
  AUTHOR_POST_LIST: '/posts/author',
  POSTS: '/posts',
  UPLOAD_PHOTO: '/users/upload-photo',
  UPDATE_USER: '/settings/update-user',
  UPDATE_PASSWORD: '/settings/update-password',
  POST_CREATE: '/posts/create',
  /** postId 필요 */
  POST_UPDATE: '/posts/update',
  POST_DELETE: '/posts/delete',
  POST_LIKE_CREATE: '/likes/create',
  POST_LIKE_DELETE: '/likes/delete',
  POST_COMMENT_CREATE: './comments/create',
  POST_COMMENT_DELETE: '/comments/delete',
  CREATE_CHANNEL: '/channels/create',
  CHANNEL: '/channels',
  DELETE_FOLLOW: '/follow/delete',
  CREATE_FOLLOW: '/follow/create',
  CHANNEL_SEARCH: '/search'
};

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

export const ACCESS_USER_ID = 'ACCESS_USER_ID';

export const ACCESS_CHANNEL_NAME = 'ACCESS_CHANNEL_NAME';
