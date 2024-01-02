import '@emotion/react';

type palette = 'dark' | 'sub' | 'main' | 'gray_1' | 'gray_2' | 'error';
type typography =
  | 'title1'
  | 'label'
  | 'mypage_large'
  | 'mypage_regular'
  | 'mypage_small'
  | 'title2'
  | 'description'
  | 'description2';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      [key in palette]: string;
    };
    typography: {
      [key in typography]: {
        fontWeight?: number;
        lineHeight?: string;
        fontSize: string;
      };
    };
  }
}
