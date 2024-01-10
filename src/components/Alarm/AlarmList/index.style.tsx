import styled from '@emotion/styled';

export const NotificationContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  h1 {
    ${({ theme }) => theme.typography.mypage_large};
    padding-bottom: 1rem;
  }
`;
