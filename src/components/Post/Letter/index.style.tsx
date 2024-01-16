import { css } from '@emotion/react';
import styled from '@emotion/styled';

const TextArea = css`
  background-color: transparent;
  border-color: transparent;
  outline: none;
  resize: none;
  box-sizing: border-box;
`;

export const LetterForm = styled.form`
  width: 100%;
`;

export const LetterContainer = styled.div<{ darkMode: boolean }>`
  background-color: ${(props) =>
    props.darkMode ? props.theme.palette.sub : props.theme.palette.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20.3125rem;
  border-radius: 20px;
  margin-top: 1.625rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const LetterTitle = styled.textarea<{ darkMode: boolean }>`
  ${TextArea};
  color: ${(props) =>
    props.darkMode
      ? props.theme.palette.light_font
      : props.theme.palette.dark_font};
  flex-grow: 0;
  width: 95%;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 3rem 0 0.9rem;
`;

export const TitleUnderLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: #aca3a3;
`;

export const LetterContent = styled.textarea<{ darkMode: boolean }>`
  ${TextArea};
  color: ${(props) =>
    props.darkMode
      ? props.theme.palette.light_font
      : props.theme.palette.dark_font};
  flex-grow: 1;
  font-size: 0.7rem;
  width: 95%;
  margin: 0.6rem 0;
  padding: 0 1rem;
`;
