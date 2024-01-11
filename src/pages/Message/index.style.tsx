import styled from '@emotion/styled';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7rem;
`;

export const MessageBody = styled.div`
  width: 95%;
  overflow-y: scroll;
`;

export const MessageFooter = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;
