import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { ACCESS_TOKEN_KEY } from '@/constants/api';

export const isLoggedInAtom = atom(false);
export const tokenAtom = atomWithStorage(ACCESS_TOKEN_KEY, '');
