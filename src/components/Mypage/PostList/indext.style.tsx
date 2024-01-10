import { theme } from '@/theme';
import styled from '@emotion/styled';

export const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid #d2d2d2;
  cursor: pointer;

  .post-title {
    font-size: ${theme.typography.mypage_regular.fontSize};
    font-weight: bold;
  }

  .post-content {
    display: -webkit-box;
    overflow: hidden;
    font-size: ${theme.typography.mypage_small.fontSize};
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;

  .channel-name {
    font-size: ${theme.typography.mypage_small.fontSize};
    color: #717171;
  }

  .reaction-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: ${theme.typography.mypage_small.fontSize};

    .reaction-wrap {
      display: flex;
      align-items: center;
      gap: 0.2rem;

      svg {
        width: 0.938rem;
        height: 0.938rem;
      }
    }
  }
`;
