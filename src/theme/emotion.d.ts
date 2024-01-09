import '@emotion/react';

type palette =
  | 'dark'
  | 'sub'
  | 'main'
  | 'gray_1'
  | 'gray_2'
  | 'error'
  | 'dark_font'
  | 'light_font';
type typography =
  | 'title1'
  | 'label'
  | 'mypage_large'
  | 'mypage_regular'
  | 'postTitle'
  | 'mypage_small'
  | 'title2'
  | 'description'
  | 'description2';

type customTheme = 'bgColor' | 'textColor' | 'mainColor';
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
    darkTheme: {
      [key in customTheme]: string;
    };
    lightTheme: {
      [key in customTheme]: string;
    };
  }
}
