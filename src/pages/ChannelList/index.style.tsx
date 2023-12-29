import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;
export const Title = styled.div`
  padding: 2rem;
  color: white;
  font-weight: 600;
  & h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  & span {
    font-size: 0.875rem;
    opacity: 50%;
  }
`;
export const ChannelIconList = styled.ul`
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
