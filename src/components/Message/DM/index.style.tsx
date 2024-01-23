import styled from '@emotion/styled';

export const DmContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  box-sizing: border-box;
`;

export const MessageContainer = styled.div<{ isOrder: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isOrder ? 'flex-start' : 'flex-end')};
  width: 100%;
  height: auto;
  margin: 0.8rem 0;
  padding: 0 0.2rem;
  box-sizing: border-box;
`;

export const IntroduceText = styled.div`
  margin: 1rem 0;
  font-size: 1rem;
`;

export const userName = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.main};
`;

export const UserProfile = styled.div<{ isSize: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.isSize}rem;
  height: ${(props) => props.isSize}rem;
  border-radius: 100px;
  border: 1px solid gray;
`;

export const Message = styled.div<{ darkMode: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80%;
  word-break: break-all;
  padding: 0.3rem 0.6rem;
  margin: 0 0.5rem;
  border-radius: 10px;
  background-color: ${(props) =>
    props.darkMode ? props.theme.palette.sub : props.theme.palette.dark};
  color: ${(props) =>
    props.darkMode
      ? props.theme.palette.light_font
      : props.theme.palette.dark_font};
  white-space: pre;
`;

export const opponentCheck = styled.div`
  display: flex;
  align-items: end;
  color: gray;
  font-size: 0.5rem;
`;
