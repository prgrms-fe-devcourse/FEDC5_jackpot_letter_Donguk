import styled from '@emotion/styled';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  padding: 0.2rem;
  background-color: rgba(0, 0, 0, 0.2);
  width: 8.625rem;
  height: 8.625rem;
  @media (max-width: 767px) {
    width: 5.625rem;
    height: 5.625rem;
  }
  border-radius: 10px;
`;
