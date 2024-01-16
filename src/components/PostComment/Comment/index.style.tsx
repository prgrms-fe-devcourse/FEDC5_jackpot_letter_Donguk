import styled from '@emotion/styled';

export const CommentContainer = styled.div<{ darkMode: boolean }>`
  width: 100%;
  bottom: 5.2rem;
  background-color: ${(props) =>
    props.darkMode ? props.theme.palette.sub : props.theme.palette.dark};
  display: flex;
  flex-direction: column;
  height: 8.1875rem;
  border-radius: 10px;
  margin-top: 0.7rem;
`;

export const CommentTitleInput = styled.input<{ darkMode: boolean }>`
  width: 95%;
  height: 2rem;
  color: ${(props) =>
    props.darkMode
      ? props.theme.palette.light_font
      : props.theme.palette.dark_font};
  padding: 0.5rem 0.7rem 0.3rem 0.9rem;
  margin: 0 auto;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  background-color: transparent;
`;

export const CommentTitle = styled.div`
  flex-grow: 0;
  display: flex;
  align-items: center;
  widht: 95%;
  height: 2rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.3rem 1rem 0 1rem;
  box-sizing: border-box;
  background-color: transparent;
`;

export const CommentTitleUnderLine = styled.div`
  width: 90%;
  height: 1px;
  margin: 0 auto;
  background-color: #aca3a3;
`;

export const CommentContent = styled.textarea<{ darkMode: boolean }>`
  flex-grow: 1;
  width: 95%;
  background-color: transparent;
  border-color: transparent;
  color: ${(props) =>
    props.darkMode
      ? props.theme.palette.light_font
      : props.theme.palette.dark_font};
  outline: none;
  resize: none;
  margin: 0.3rem auto;
  padding: 0 0.9rem;
  box-sizing: border-box;
`;
