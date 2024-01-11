/**  유저 정보 type */
export interface User {
  coverImage: string; // 커버 이미지
  image: string; // 프로필 이미지
  role: string;
  emailVerified: boolean; // 사용되지 않음
  banned: boolean; // 사용되지 않음
  isOnline: boolean;
  posts: Post[];
  likes: Like[];
  comments: Comment[];
  followers: Follow[];
  following: Follow[];
  notifications: Notification[];
  messages: Message[];
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

/** 채널 type */
export interface Channel {
  authRequired: boolean; // 사용되지 않음
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

/** 게시물 type */
export interface Post {
  likes: Like[];
  comments: Comment[];
  _id: string;
  image?: string;
  imagePublicId?: string;
  title: string;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
}

/* 좋아요 type */
export interface Like {
  _id: string;
  user: string; // 사용자 id
  post: string; // 포스트 id
  createdAt: string;
  updatedAt: string;
}

/* 댓글 type */
export interface Comment {
  _id: string;
  comment: string;
  author: User;
  post: string; // 포스트 id
  createdAt: string;
  updatedAt: string;
}

/** 알림 type */
export interface Notification {
  seen: boolean;
  _id: string;
  author: User;
  user: User | string;
  post: string | null; // 포스트 id
  follow?: string; // 사용자 id
  comment?: Comment;
  message?: string; // 메시지 id
  like?: string;
  createdAt: string;
  updatedAt: string;
}

/** 팔로우 type */
export interface Follow {
  _id: string;
  user: string; // 사용자 id
  follower: string; // 사용자 id
  createdAt: string;
  updatedAt: string;
}

/** 메시지함 type */
export interface Conversation {
  _id: string[];
  message: string;
  sender: User;
  receiver: User;
  seen: boolean;
  createdAt: string;
}

/**  메시지 type */
export interface Message {
  _id: string;
  message: string;
  sender: User;
  receiver: User;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Authentication {
  user: AuthenticationUser;
  token: string;
}

export interface AuthenticationUser {
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  posts: [];
  likes: [];
  comments: [];
  followers: [];
  following: [];
  notifications: [];
  messages: [];
  _id: string;
  fullName: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

export interface UserPost extends Post {
  channelName: string;
  content: string;
}

export interface UserComment extends Comment {
  commentAuthor: string;
  postAuthor: string;
  postContent: string;
  image?: string;
}

export interface FollowType extends Follow {
  name: string;
  image?: string;
  userId: string;
}
