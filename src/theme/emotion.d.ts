import '@emotion/react';

type palette = 'dark' | 'sub' | 'main' | 'gray_1' | 'gray_2' | 'error';
type typography = 'title1' | 'label' | 'description' | 'postTitle';

declare module '@emotion/react' {
  export interface Theme {
    palette: {
      [key in palette]: string;
    };
    typography: {
      [key in typography]: {
        fontWeight?: number;
        fontSize: string;
      };
    };
  }
}
