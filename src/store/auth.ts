import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import {
  ACCESS_CHANNEL_NAME,
  ACCESS_TOKEN_KEY,
  ACCESS_USER_ID
} from '@/constants/api';

export const isLoggedInAtom = atom(false);
export const tokenAtom = atomWithStorage(ACCESS_TOKEN_KEY, '');
export const channelNameAtom = atomWithStorage(ACCESS_CHANNEL_NAME, '');
export const idAtom = atomWithStorage(ACCESS_USER_ID, '');
