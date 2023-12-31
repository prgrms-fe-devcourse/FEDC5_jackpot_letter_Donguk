import { theme } from '@/theme';
import styled from '@emotion/styled';

export const CommentsContainer = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #d2d2d2;
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
  width: 100%;

  .author {
    font-weight: bold;
    font-size: ${theme.typography.mypage_regular.fontSize};
  }

  .content {
    display: -webkit-box;
    overflow: hidden;
    font-size: ${theme.typography.mypage_small.fontSize};
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .comment-info-wrap {
    margin-top: 1rem;

    .author {
      margin-right: 0.625rem;
    }
  }
`;
