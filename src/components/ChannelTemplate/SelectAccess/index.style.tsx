import { theme } from '@/theme';
import styled from '@emotion/styled';

export const CadidateContainer = styled.div<{
  darkMode: boolean;
}>`
  max-width: 22rem;
  padding: 1rem;
  margin: auto;
  & > span {
    ${({ theme }) => theme.typography.description2};
    color: ${({ darkMode }) =>
      darkMode ? theme.palette.gray_3 : theme.palette.gray_1};
    opacity: 50%;
  }
  & > div {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
  }
`;
