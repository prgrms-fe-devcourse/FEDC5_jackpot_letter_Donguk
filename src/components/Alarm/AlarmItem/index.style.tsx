import styled from '@emotion/styled';

export const Notification = styled.div`
  padding: 0.7rem 0.5rem;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray_3};
`;
export const Content = styled.div`
  display: flex;
  gap: 1rem;
  img {
    box-shadow: 1px 2px 5px ${({ theme }) => theme.palette.gray_3};
    border-radius: 5px;
    width: 2rem;
  }
  span {
    font-size: small;
    color: ${({ theme }) => theme.palette.gray_1};
  }
`;

export const Time = styled.div(({ theme }) => ({
  padding: '0.5rem',
  display: 'block',
  color: theme.palette.gray_2,
  ...theme.typography.label
}));
