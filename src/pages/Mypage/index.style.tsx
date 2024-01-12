import { theme } from '@/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const scrollbar = css`
  &::-webkit-scrollbar {
    width: 1.25rem;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      width: 0.625rem;
      background: #b7b7b7; /* 스크롤바 막대 색상 */
    }
  }
`;

export const Container = styled.div<{ isMypage: boolean; darkMode: boolean }>`
  height: 100svh;
  padding: 2.5rem 1.75rem;
  display: ${(props) => (props.isMypage ? 'block' : 'flex')};
  box-sizing: border-box;

  background-color: ${(props) =>
    props.darkMode ? theme.darkTheme.bgColor : theme.lightTheme.bgColor};

  .sidebar-container {
    width: ${(props) => (props.isMypage ? '100%' : '18rem')};
    overflow-y: auto;
    margin-right: ${(props) => (props.isMypage ? '0rem' : '1.75rem')};
    ${scrollbar}
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    width: calc(100% - 18rem - 1.75rem);

    .container {
      width: 100%;
      overflow-y: auto;

      ${scrollbar}
    }
  }

  .loading-wrap {
    display: flex;
    justify-content: center;
    width: calc(100% - 18rem - 1.75rem);
  }
`;
