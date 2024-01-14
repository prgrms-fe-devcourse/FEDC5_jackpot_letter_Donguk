import { css } from '@emotion/react';
import styled from '@emotion/styled';

const animation = css`
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;

export const ProfileImg = styled.div`
  position: relative;
  overflow: hidden;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  ${animation}
`;

export const CommentsContainer = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #d2d2d2;
`;

export const Item = styled.div<{ width?: number }>`
  position: relative;
  overflow: hidden;
  height: 0.875rem;
  width: ${(props) => `${props.width || 100}%`};
  border-radius: 3px;

  ${animation}
`;

export const PostInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.688rem;
`;

export const PostTexInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: calc(100% - 2.5rem);

  .comment-info-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-top: 1rem;
  }
`;
