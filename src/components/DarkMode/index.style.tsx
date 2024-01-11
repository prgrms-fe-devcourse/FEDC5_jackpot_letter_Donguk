import styled from '@emotion/styled';

export const Container = styled.button`
  background-color: white;
  border: none;
  margin-left: 0.4rem;
  padding-bottom: 0.7rem;
  cursor: pointer;
`;
export const Text = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.palette.gray_1};
`;
