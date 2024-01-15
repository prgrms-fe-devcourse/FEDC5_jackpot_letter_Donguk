import { theme } from '@/theme';
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

    .name {
      flex: 1;
      margin: 0.813rem;
    }
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

export const Item = styled.div<{ width?: number }>`
  position: relative;
  overflow: hidden;
  height: 0.875rem;
  width: ${(props) => `${props.width || 100}%`};
  border-radius: 3px;

  ${animation};
`;

export const FollowBtn = styled.div`
  position: relative;
  overflow: hidden;
  width: 5rem;
  height: 2rem;
  border-radius: 10px;

  ${animation}
`;
