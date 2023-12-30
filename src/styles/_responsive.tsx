import { css } from '@emotion/react';

const breakPoints = [640, 1024];
export const media = breakPoints.map(
  (breakPoint) => `@media (min-width: ${breakPoint}px)`
);

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
