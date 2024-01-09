import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 16rem;
  height: 2rem;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  background-color: #f9fafb;
  input {
    background-color: #f9fafb;
    outline: none;
    border: none;
  }
  img {
    opacity: 50%;
  }
  img:hover {
    opacity: 100%;
  }
`;
