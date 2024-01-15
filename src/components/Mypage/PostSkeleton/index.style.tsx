import styled from '@emotion/styled';

export const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid #d2d2d2;
  cursor: pointer;
`;

export const Item = styled.div<{ width?: number }>`
  position: relative;
  overflow: hidden;
  height: 0.875rem;
  width: ${(props) => `${props.width || 100}%`};
  border-radius: 3px;

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

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;
