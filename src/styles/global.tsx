import { css } from '@emotion/react';
import PretendardBold from '../../public/assets/fonts/Pretendard-Bold.woff2';
import PretendardMedium from '../../public/assets/fonts/Pretendard-Medium.woff2';
import PretendardRegular from '../../public/assets/fonts/Pretendard-Regular.woff2';

interface ThemeProps {
  [key: string]: string;
}
const global = (theme: ThemeProps) => css`
  *,
  body {
    font-family: 'PretendardRegular';
  }
  html {
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(38, 27, 62, 0.8) 0%,
      rgba(38, 27, 62, 0.6) 34.5%,
      rgba(38, 27, 62, 0.4) 69.5%,
      rgba(38, 27, 62, 0.2) 100%
    );
    color: ${theme.textColor};
  }
  a {
    color: ${theme.textColor};
  }

  .main #mypage,
  .main .container {
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 1.25rem;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #b7b7b7;
      border-radius: 10px;
      border: 7px solid ${theme.bgColor};
    }
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
