import styled from '@emotion/styled';

export const CommentContainer = styled.div`
  position: absolute;
  bottom: 5.2rem;
  background-color: ${(props) => props.theme.palette.sub};
  display: flex;
  flex-direction: column;
  width: 19.375rem;
  height: 8.1875rem;
  border-radius: 10px;
  margin-top: 0.7rem;
`;

export const CommentTitle = styled.div`
  flex-grow: 0;
  display: flex;
  align-items: center;
  widht: 95%;
  height: 2.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 1rem 1rem 0 1rem;
  box-sizing: border-box;
  background-color: transparent;
`;

export const CommentTitleUnderLine = styled.div`
  width: 90%;
  height: 1px;
  margin: 0 auto;
  background-color: #aca3a3;
`;

export const CommentContent = styled.textarea`
  flex-grow: 1;
  width: 95%;
  background-color: transparent;
  border-color: transparent;
  outline: none;
  resize: none;
  margin: 0.3rem auto;
  padding: 0 0.7rem;
  box-sizing: border-box;
`;
