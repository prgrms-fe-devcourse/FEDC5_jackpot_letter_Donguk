import styled from '@emotion/styled';

export const NotificationContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Header = styled.div`
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;

  span {
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 10px;
    ${({ theme }) => theme.typography.label};
    color: ${({ theme }) => theme.palette.gray_2};
    background-color: ${({ theme }) => theme.palette.gray_3};
  }
  span:hover {
    color: ${({ theme }) => theme.palette.gray_1};
  }
  h1 {
    ${({ theme }) => theme.typography.mypage_large};
  }
`;
