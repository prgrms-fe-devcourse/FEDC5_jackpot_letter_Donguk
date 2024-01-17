import styled from '@emotion/styled';

export const Button = styled.div<{ isUnread: boolean }>`
  cursor: pointer;
  position: absolute;
  padding: 2rem 1rem;
  right: 3rem;
  z-index: 10;
  cursor: pointer;
  img {
    position: absolute;
    right: 1rem;
    visibility: ${({ isUnread }) => (isUnread ? 'block' : 'hidden')};
  }
`;
