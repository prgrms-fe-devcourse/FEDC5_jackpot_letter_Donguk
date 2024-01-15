import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  height: 100dvh;
  padding: 2.5rem 1.75rem;
  box-sizing: border-box;

  .container {
    width: 100%;
    overflow-y: auto;
    padding: 0 1rem;
    box-sizing: border-box;
  }
`;
