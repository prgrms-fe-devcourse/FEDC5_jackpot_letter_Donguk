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
  overflow: overlay;

  @media (max-height: 667px) {
    height: 22rem;
  }
  ::-webkit-scrollbar {
    width: 0;
  }

  // ::-webkit-scrollbar-thumb {
  //   background-color: hsla(0, 0%, 42%, 0.3);
  //   border-radius: 100px;
  // }
`;

export const PrePostContainer = styled.div`
  ${ContainerMixin}
  background-color: ${(props) => props.theme.palette.sub};
  height: 13.3125rem;
  margin-bottom: 0.2rem;
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
  font-size: 0.7rem;
  width: 95%;
  background-color: transparent;
  border-color: transparent;
  outline: none;
  resize: none;
  margin: 0.6rem 0;
  padding: 0 0.6rem;
  box-sizing: border-box;
`;

export const LikeCommentContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LikeLogoContainer = styled.span`
  display: inline-flex;
  padding: 0.3rem 0.5rem;
  width: auto;
  border: solid 1.5px gray;
  border-radius: 15px;
  box-sizing: border-box;
  cursor: pointer;
`;
export const LikeLogo = styled.img`
  width: 1.5rem;
`;

export const ListCount = styled.span`
  color: white;
  padding-left: 0.4rem;
  margin-top: 0.4rem;
`;
export const CommentCount = styled.span`
  color: ${({ theme }) => theme.palette.main};
`;

export const CommentCountText = styled.span`
  color: white;
  font-weight: 500;
  margin: 0.7rem;
  padding-top: 0.4rem;
  box-sizing: border-box;
  font-size: 0.8rem;
`;

// ${ContainerMixin}
export const PreCommentContainer = styled.div`
  width: 19.375rem;
  border-radius: 20px;
  position: relative;
  height: 13.5625rem;
  margin-top: 0.5rem;
`;

export const PrePostComment = styled.div`
  margin: auto 0;
  background-color: ${(props) => props.theme.palette.sub};
  font-size: 0.8rem;
  font-weight: 400;
  width: 100%;
  height: auto;
  line-height: 1rem;
  margin-bottom: 0.6rem;
  padding: 1rem 0.7rem;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const PrePostUserName = styled.span`
  font-weight: 800;
`;
