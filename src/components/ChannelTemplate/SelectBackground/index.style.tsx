import styled from '@emotion/styled';

export const Background = styled.div<{ selectedNumber: number }>`
  width: 100vw;
  height: 100vh;
  background-image: ${({ selectedNumber }) =>
    `url("src/assets/background/background${selectedNumber}.png")`};
`;

export const Item = styled.img`
  margin: 0.5rem;
  background-color: black;
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 10px;
  &:hover {
    width: calc(5.625rem - 7px);
    height: calc(5.625rem - 7px);
    border: 3px solid ${({ theme }) => theme.palette.main};
  }
`;
