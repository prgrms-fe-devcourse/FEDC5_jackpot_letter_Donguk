import styled from '@emotion/styled';

export const Container = styled.div<{
  visible: boolean;
}>`
  position: absolute;
  bottom: 5rem;
  left: calc(50% - 4rem);
  width: 5rem;
  padding: 1rem;
  border-radius: 10px;
  div {
    min-width: 50%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0rem 1rem;
  }
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
`;
export const Image = styled.img<{
  visible: boolean;
}>`
  background-color: rgba(0, 0, 0, 0.1);
  width: 0.5rem;
  padding: 0.4rem;
  border-radius: 100%;
  visibility: ${({ visible }) => (visible ? 'block' : 'hidden')};
`;
