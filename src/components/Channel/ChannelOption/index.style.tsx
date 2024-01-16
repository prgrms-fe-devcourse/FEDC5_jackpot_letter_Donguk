import styled from '@emotion/styled';

export const OptionBox = styled.div`
  margin: 0.5rem 0;
  display: flex;
  gap: 0.2rem;
  z-index: 1;
`;
export const Option = styled.div<{
  darkMode: boolean;
}>`
  ${({ theme }) => theme.typography.description};
  display: flex;
  border: 1px solid ${({ theme }) => theme.palette.gray_2};
  border-radius: 10px;
  padding: 0.5rem;
  gap: 0.2rem;
  div {
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    color: ${({ theme, darkMode }) =>
      darkMode ? theme.palette.gray_2 : theme.palette.gray_1};
  }
`;
