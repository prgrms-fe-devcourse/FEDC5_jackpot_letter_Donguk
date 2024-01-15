import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ContainerMixin = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
`;

export const PrePostAndCommentContainer = styled.div`
  width: 100%;
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
  position: relative;
  background-color: ${(props) => props.theme.palette.sub};
  height: 13.3125rem;
  margin-bottom: 0.2rem;
`;

// 다크모드라 이전 포스트의 배경색이 밝은데 폰트색도 밝아서 안보임.
export const PrePostInnerTitle = styled.div`
  flex-grow: 0;
  width: 95%;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: black;
  background-color: transparent;
  border-color: transparent;
  margin: 0 auto;
  padding: 1rem 1rem 0 0.5rem;
  box-sizing: border-box;
`;

export const PrePostUnnerline = styled.div`
  width: 90%;
  height: 1px;
  margin: 0 auto;
  background-color: #aca3a3;
`;

export const PrePostContent = styled.div`
  flex-grow: 1;
  font-size: 0.7rem;
  width: 95%;
  color: black;
  background-color: transparent;
  border-color: transparent;
  outline: none;
  resize: none;
  margin: 0.5rem auto 2rem auto;
  padding: 0 0.6rem;
  box-sizing: border-box;
`;

export const PrePostEditContent = styled.textarea`
  flex-grow: 1;
  font-size: 0.7rem;
  width: 95%;
  color: black;
  background-color: transparent;
  border-color: transparent;
  outline: none;
  resize: none;
  margin: 0.5rem auto 2rem auto;
  padding: 0 0.6rem;
  box-sizing: border-box;
`;

export const EditImg = styled.img`
  position: absolute;
  right: 2.5rem;
  bottom: 0.5rem;
  width: 1.2rem;
  cursor: pointer;
`;

export const DeleteImg = styled.img`
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  width: 1.2rem;
  cursor: pointer;
`;

export const CompleteImg = styled.img`
  position: absolute;
  right: 2.5rem;
  bottom: 0.5rem;
  width: 1.2rem;
  cursor: pointer;
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

export const PreCommentContainer = styled.div`
  width: 100%;
  height: 18rem;
  flex-grow: 1;
  border-radius: 20px;
  position: relative;
  margin-top: 0.5rem;
`;

export const PrePostComment = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: auto 0;
  color: black;
  background-color: ${(props) => props.theme.palette.sub};
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1rem;
  margin-bottom: 0.6rem;
  padding: 1rem 2.5rem 1rem 0.7rem;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const PrePostUserName = styled.span`
  font-weight: 700;
`;

export const CommentDeleteImg = styled.img`
  position: absolute;
  right: 1rem;
  width: 1.2rem;
  cursor: pointer;
`;
