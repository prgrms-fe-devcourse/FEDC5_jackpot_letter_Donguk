export const END_POINTS = {
  SIGNIN: '/login',
  SIGNUP: '/signup',
  SIGNOUT: '/logout',
  AUTH_USER: '/auth-user',
  USER_LIST: '/users/get-users',
  USER_INFOMATION: '/users',
  USER: '/users',
  USER_ONLINE: '/users/online-users',
  AUTHOR_POST_LIST: '/posts/author',
  CHANNEL_POST_LIST: '/posts/channel',
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
  LIKE_CREATE: '/likes/create',
  LIKE_DELETE: '/likes/delete',
  CHANNEL_POST: '/posts/channel',
  DELETE_FOLLOW: '/follow/delete',
  CREATE_FOLLOW: '/follow/create',
  CHANNEL_SEARCH: '/search',
  NOTIFICATION: '/notifications',
  PUT_NOTIFICATION: '/notifications/seen',
  POST_NOTIFICATION: '/notifications/create',
  MESSAGES: '/messages',
  MESSAGES_CREATE: '/messages/create',
  MESSAGES_CONVERSATIONS: '/messages/conversations',
  MESSAGES_UPDATE_SEEN: '/messages/update-seen'
} as const;

export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN' as const;
export const ACCESS_USER_ID = 'ACCESS_USER_ID' as const;
export const ACCESS_CHANNEL_NAME = 'ACCESS_CHANNEL_NAME' as const;

export const DARKMODE = 'DARK_MODE' as const;

export const ERROR_MESSAGE = {
  'Your email and password combination does not match an account.':
    '등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다',
  'The email address is already being used.': '이미 사용중인 이메일 입니다.'
} as const;

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONTENT_TOO_LARGE: 413,
  INTERNAL_SERVER_ERROR: 500
} as const;
