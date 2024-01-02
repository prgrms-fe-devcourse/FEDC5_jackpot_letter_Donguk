import styled from '@emotion/styled';

export const CadidateContainer = styled.div`
  max-width: 22rem;
  padding: 1rem;
  margin: auto;
  & > span {
    ${({ theme }) => theme.typography.description2};
  }
  & > div {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
  }
`;
