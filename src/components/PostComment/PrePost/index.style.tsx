import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ContainerMixin = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19.375rem;
  border-radius: 20px;
`;

export const PrePostAndCommentContainer = styled.div`
  overflow-x: scroll;
  padding-bottom: 0.5rem;
  box-sizing: border-box;
`;

export const PrePostContainer = styled.div`
  ${ContainerMixin}
  background-color: ${(props) => props.theme.palette.sub};
  height: 8.125rem;
  margin-bottom: 0.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
`;

export const PrePostInnerTitle = styled.div`
  flex-grow: 0;
  width: 95%;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: transparent;
  border-color: transparent;
  padding: 1rem 1rem 0 0.5rem;
  box-sizing: border-box;
`;

export const PrePostUnnerline = styled.div`
  width: 90%;
  height: 1px;
  background-color: #aca3a3;
`;

export const PrePostContent = styled.div`
  flex-grow: 1;
  font-size: 0.6rem;
  width: 95%;
  background-color: transparent;
  border-color: transparent;
  outline: none;
  resize: none;
  margin: 0.6rem 0;
  padding: 0 0.6rem;
  box-sizing: border-box;
`;

export const PreCommentContainer = styled.div`
  ${ContainerMixin}
  position: relative;
  height: 13.5625rem;
`;

export const PrePostComment = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.palette.sub};
  font-size: 0.8rem;
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: 10px;
`;
