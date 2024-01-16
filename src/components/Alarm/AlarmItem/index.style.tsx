import styled from '@emotion/styled';

export const Notification = styled.div`
  padding: 0.7rem 0.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray_3};
`;
export const Info = styled.div<{ seen: boolean }>`
  display: flex;
  gap: 0.5rem;
  img {
    visibility: ${({ seen }) => (seen ? 'hidden' : 'block')};
    width: 5px;
    height: 10px;
  }
  div {
    padding: '0.5rem';
    display: 'block';
    color: ${({ theme }) => theme.palette.gray_2};
    ${({ theme }) => theme.typography.label};
  }
`;
export const Content = styled.div<{ seen: boolean }>`
  display: flex;
  color: ${({ theme, seen }) =>
    seen ? theme.palette.gray_2 : theme.palette.gray_1};
  gap: 1rem;
  div {
    ${({ theme }) => theme.typography.description2};
  }
  img {
    box-shadow: 1px 2px 5px ${({ theme }) => theme.palette.gray_3};
    border-radius: 5px;
    width: 1.8rem;
    padding: 0.1rem;
  }
  span {
    ${({ theme }) => theme.typography.mypage_small};
  }
`;
