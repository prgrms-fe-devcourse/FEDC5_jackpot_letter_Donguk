import { css } from '@emotion/react';

const breakpoints = [640, 1024];
export const media = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

const responsiveStyle = css`
  html {
    ${media[0]} {
      font-size: 16px;
    }
    ${media[1]} {
      font-size: 20px;
    }
  }
`;
export default responsiveStyle;
