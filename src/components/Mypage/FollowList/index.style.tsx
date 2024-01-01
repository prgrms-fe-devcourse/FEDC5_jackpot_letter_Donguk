import { theme } from '@/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const FollowItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.938rem 0px;

  .follow-item {
    display: flex;
    align-items: center;
    font-size: ${theme.typography.mypage_small.fontSize};
    font-weight: bold;

    span {
      flex: 1;
      margin-left: 0.813rem;
    }

    button {
      width: 5rem;
      height: 2rem;
      border-radius: 10px;
      border: none;
      background-color: #d9d9d9;
      font-size: ${theme.typography.mypage_small.fontSize};
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
