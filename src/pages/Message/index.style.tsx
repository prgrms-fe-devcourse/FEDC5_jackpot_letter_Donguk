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
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const MessageBody = styled.div`
  width: 95%;
  height: 100%;
  // overflow-y: scroll;
  overflow: overlay;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 42%, 0.3);
    border-radius: 100px;
  }
`;

export const MessageFooter = styled.div`
  width: 100%;
`;
