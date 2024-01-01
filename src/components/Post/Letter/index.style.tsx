import { css } from '@emotion/react';
import styled from '@emotion/styled';

const TextArea = css`
  background-color: transparent;
  border-color: transparent;
  outline: none;
  resize: none;
  box-sizing: border-box;
`;

export const LetterContainer = styled.div`
  background-color: ${(props) => props.theme.palette.sub};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19.375rem;
  height: 13.3125rem;
  border-radius: 20px;
  margin-top: 1.625rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const LetterTitle = styled.textarea`
  ${TextArea}
  flex-grow: 0;
  width: 95%;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 1rem 0 0.5rem;
`;

export const TitleUnderLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: #aca3a3;
`;

export const LetterContent = styled.textarea`
  ${TextArea}
  flex-grow: 1;
  font-size: 0.6rem;
  width: 95%;
  margin: 0.6rem 0;
  padding: 0 0.6rem;
`;
