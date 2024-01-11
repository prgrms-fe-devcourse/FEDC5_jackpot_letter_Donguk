import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
`;

export const MoveBack = styled.img`
  width: ${(props) => props.isSize}rem;
  margin-left: 1rem;
`;

export const UserProfile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.1rem;
  height: 2.1rem;
  margin-left: 0.7rem;
  border-radius: 100px;
  border: 1px solid gray;
`;

export const UserOnline = styled.div`
  position: absolute;
  right: 0.2rem;
  bottom: 0;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 100px;
  background-color: ${({ isColor }) => (isColor ? 'green' : 'red')};
  z-index: 1;
`;

export const UserName = styled.div`
  margin-left: 0.6rem;
  font-size: 1rem;
`;
