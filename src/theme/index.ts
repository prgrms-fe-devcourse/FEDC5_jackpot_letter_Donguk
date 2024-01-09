import { Theme } from '@emotion/react';

const palette = {
  dark: '#261b3e',
  main: '#0EB29A',
  sub: '#F0ECE5',
  gray_1: '#0F172A', //** Input 라벨 */
  gray_2: '#9f9f9f', //** Input border */
  error: '#FF0000',
  dark_font: '#ffffff',
  light_font: '#000000'
};

const lightTheme = {
  bgColor: palette.sub,
  textColor: palette.dark,
  mainColor: palette.main
};

const darkTheme = {
  bgColor: palette.dark,
  textColor: palette.sub,
  mainColor: palette.main
};

const typography = {
  //** 로그인, 회원가입에서 사용하는 프로젝트명 */
  title1: {
    fontSize: '2rem', // 32px
    fontWeight: 900
  },
  /** 포스트/댓글 페이지에서 사용하는 헤더 텍스트 */
  postTitle: {
    fontSize: '1.3rem',
    fontWeight: 900
  },
  title2: {
    fontSize: '1.5rem;', //24px
    lineHeight: '2rem' // 32px
  },
  label: {
    fontSize: '0.75rem' // 12px
  },
  description: {
    fontSize: '0.68rem' // 11px
  },
  //** 마이페이지에서 사용하는 프로젝트명 */
  mypage_large: {
    fontSize: '1.125rem', // 18px
    fontWeight: 700
  },
  mypage_regular: {
    fontSize: '0.875rem' // 14px
  },
  mypage_small: { fontSize: '0.75rem' }, // 12px
  description2: {
    fontSize: ' 0.875rem', // 14px
    fontWeight: 600
  }
};

export const theme: Theme = {
  palette,
  typography,
  lightTheme,
  darkTheme
};
