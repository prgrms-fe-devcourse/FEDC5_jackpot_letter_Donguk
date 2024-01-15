import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  height: 100%;
  padding: 2.5rem 1.75rem;
  box-sizing: border-box;

  .container {
    width: 100%;
    overflow-y: auto;
  }
`;
