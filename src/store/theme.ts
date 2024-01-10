import { atom } from 'jotai';
import { DARKMODE } from '@/constants/api';
import { getStorage } from '@/utils/LocalStorage';

const darkModeStorageValue = getStorage(DARKMODE);

let defaultTheme: boolean;

if (darkModeStorageValue !== undefined && darkModeStorageValue !== null) {
  defaultTheme = Boolean(darkModeStorageValue);
} else {
  defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export const darkAtom = atom<boolean>(defaultTheme);
