import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 1.625rem 1.75rem;
`;

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

  .author {
    font-weight: bold;
  }

  .comment-info-wrap {
    margin-top: 1rem;

    .author {
      margin-right: 0.625rem;
    }
  }
`;
