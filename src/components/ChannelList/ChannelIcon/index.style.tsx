import styled from '@emotion/styled';

export const ChannelIconContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem;

  & img {
    width: 5rem;
  }

  & span {
    ${({ theme }) => theme.typography.description2};
  }
`;
