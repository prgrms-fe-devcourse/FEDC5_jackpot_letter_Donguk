import { atom } from 'jotai';
import { User } from '@/types/ResponseType';

export const defaultState: User = {
  coverImage: '', // 커버 이미지
  image: '', // 프로필 이미지
  role: '',
  emailVerified: false, // 사용되지 않음
  banned: false, // 사용되지 않음
  isOnline: false,
  posts: [],
  likes: [],
  comments: [],
  followers: [],
  following: [],
  notifications: [],
  messages: [],
  _id: '',
  fullName: '',
  email: '',
  createdAt: '',
  updatedAt: ''
};

export const userAtom = atom<User>(defaultState);
