import { Theme } from '@emotion/react';

const palette = {
  dark: '#0F172A',
  main: '#0EB29A',
  sub: '#F0ECE5',
  gray_1: '#0F172A' //** Input 라벨 */
};

const typography = {
  //** 로그인, 회원가입에서 사용하는 프로젝트명 */
  title1: {
    fontSize: '2rem', // 32px
    fontWeight: 900
  },
  label: {
    fontSize: '0.75rem' // 12px
  },
  description: {
    fontSize: '0.68rem' // 11px
  }
};

export const theme: Theme = {
  palette,
  typography
};
