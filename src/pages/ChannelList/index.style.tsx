import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
`;
export const Title = styled.div`
  padding: 2rem;
  font-weight: 600;
  & h1 {
    display: flex;
    ${({ theme }) => theme.typography.title2};
    & span {
      max-width: 10rem;
      display: block;
      ${({ theme }) => theme.typography.title2};
      color: ${({ theme }) => theme.palette.main};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  & span {
    ${({ theme }) => theme.typography.description2};
    opacity: 50%;
  }
`;
export const Img = styled.div`
  position: absolute;
  right: 22%;
  @media (max-width: 500px) {
    right: 10%;
  }
`;
export const Body = styled.div`
  padding: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ChannelIconList = styled.ul`
  margin: auto;
  width: 90%;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 33%);
`;
