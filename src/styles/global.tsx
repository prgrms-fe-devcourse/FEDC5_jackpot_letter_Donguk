import { css } from '@emotion/react';
import PretendardBold from '../../public/assets/fonts/Pretendard-Bold.woff2';
import PretendardMedium from '../../public/assets/fonts/Pretendard-Medium.woff2';
import PretendardRegular from '../../public/assets/fonts/Pretendard-Regular.woff2';
import { theme } from '../theme/index';

const global = css`
  *,
  body {
    font-family: 'PretendardRegular';
  }

  html {
    background-color: ${theme.palette.dark};
  }

  @font-face {
    font-family: 'PretendardBold';
    src:
      local('PretendardBold'),
      url(${PretendardBold}) format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'PretendardMedium';
    src:
      local('PretendardMedium'),
      url(${PretendardMedium}) format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'PretendardRegular';
    src:
      local('PretendardRegular'),
      url(${PretendardRegular}) format('woff2');
    font-style: normal;
  }
`;

export default global;
