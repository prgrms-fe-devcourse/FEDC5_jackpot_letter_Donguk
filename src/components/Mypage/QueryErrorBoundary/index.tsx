import { ReactElement } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { mypagePathToSkeletonType } from '@/constants/mypagePathToSkeletonType';
import CommentSkeleton from '../CommentSkeleton';
import FollowSkeleton from '../FollowSkeleton';
import PostSkeleton from '../PostSkeleton';
import * as Style from './index.style';

interface ErrorFullback {
  children: ReactElement;
}

function QueryErrorBoundary({ children }: ErrorFullback) {
  const { reset } = useQueryErrorResetBoundary(); // (*)

  const location = useLocation();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <Style.Container>
          {mypagePathToSkeletonType[location.pathname] === 'post' ? (
            <PostSkeleton />
          ) : null}
          {mypagePathToSkeletonType[location.pathname] === 'comment' ? (
            <CommentSkeleton />
          ) : null}
          {mypagePathToSkeletonType[location.pathname] === 'follow' ? (
            <FollowSkeleton />
          ) : null}
          <div className="info-container">
            <Style.InfoWrap>
              <span>⚠ 문제가 발생했습니다</span>
              <button
                className="button"
                onClick={() => {
                  resetErrorBoundary();
                }}
              >
                다시 시도하기
              </button>
            </Style.InfoWrap>
          </div>
        </Style.Container>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}

export default QueryErrorBoundary;
