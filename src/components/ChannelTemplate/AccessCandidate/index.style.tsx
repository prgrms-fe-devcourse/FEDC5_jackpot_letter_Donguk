import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 5.5rem;
  gap: 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.palette.gray_2};
  & > img {
    width: 2.5rem;
  }
  & > span {
    ${({ theme }) => theme.typography.description};
    color: ${({ theme }) => theme.palette.gray_2};
  }
`;
