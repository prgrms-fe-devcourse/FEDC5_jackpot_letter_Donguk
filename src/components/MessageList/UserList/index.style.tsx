import styled from '@emotion/styled';

export const UserListContainer = styled.div`
  width: 90%;
  height: calc(100vh - 12.5625rem);
  margin: 1rem auto 0.5rem auto;
  box-sizing: border-box;
  overflow-y: scroll;
`;

export const UserList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  margin: 0.3rem 0;
  &:hover {
    background-color: ${({ theme }) => theme.palette.main};
  }
`;

export const UserProfile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
  border: 1px solid gray;
`;

export const UserOnline = styled.div<{ isColor: boolean }>`
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
  padding-left: 1rem;
`;
