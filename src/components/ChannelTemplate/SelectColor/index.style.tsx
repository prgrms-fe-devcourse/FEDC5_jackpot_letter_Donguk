import styled from '@emotion/styled';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  padding: 0.2rem;
  background-color: rgba(255, 255, 255, 0.2);
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 10px;
  &:hover {
    width: calc(5.625rem - 7px);
    height: calc(5.625rem - 7px);
    border: 3px solid ${({ theme }) => theme.palette.main};
  }
`;
