import styled from '@emotion/styled';

export const Background = styled.div<{ selectedNumber: number }>`
  width: 100vw;
  height: 100vh;
  background-image: ${({ selectedNumber }) =>
    `url("/src/assets/background/background${selectedNumber}.png")`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Item = styled.img`
  margin: 0.5rem;
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 10px;
  object-fit: fill;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.palette.gray_2};
`;
