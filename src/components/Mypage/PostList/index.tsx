import { Link } from 'react-router-dom';
import {
  FetchPreviousPageOptions,
  UseInfiniteQueryResult
} from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import useIntersection from '@/hooks/useIntersection';
import { PATH } from '@/constants/path';
import { PATHNAME } from '@/constants/sidebar';
import { darkAtom } from '@/store/theme';
import { theme } from '@/theme';
import { UserPost } from '@/types/ResponseType';
import Empty from '../Empty';
import { Item, PostInfo, PostItem } from '../PostSkeleton/index.style';
import * as Style from './indext.style';

interface PostListProps {
  posts: UserPost[];
  type: 'post' | 'like';
  nextPage?: (
    options?: FetchPreviousPageOptions
  ) => Promise<UseInfiniteQueryResult>;
  isFetchingNextPage?: boolean;
}

function PostList({
  posts,
  type,
  nextPage,
  isFetchingNextPage
}: PostListProps) {
  const selectedSideMenu = PATHNAME[location.pathname];
  const darkMode = useAtomValue(darkAtom);
  const ref = useIntersection(nextPage!, posts.length);

  return (
    <>
      {posts.length === 0 ? (
        <Empty text={`${selectedSideMenu}가`} />
      ) : (
        <>
          <div className="container">
            {posts.map(
              ({
                title,
                channelName,
                content,
                likes,
                comments,
                _id,
                postId
              }) => (
                <Link
                  to={
                    type === 'like'
                      ? `${PATH.COMMENT}/${postId}`
                      : `${PATH.COMMENT}/${_id}`
                  }
                  key={_id}
                >
                  <Style.PostItem>
                    <span className="post-title">{title}</span>
                    <span className="post-content">{content}</span>
                    <Style.PostInfo>
                      <span className="channel-name">{channelName}</span>
                      <div className="reaction-container">
                        <div className="reaction-wrap">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              id="SVGRepo_bgCarrier"
                              strokeWidth="0"
                            ></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {' '}
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                                stroke={
                                  type === 'post'
                                    ? darkMode
                                      ? theme.lightTheme.bgColor
                                      : theme.darkTheme.bgColor
                                    : '#ff1100'
                                }
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>{' '}
                            </g>
                          </svg>
                          <span>{likes.length}</span>
                        </div>
                        <div className="reaction-wrap">
                          <svg
                            fill={
                              darkMode
                                ? theme.lightTheme.bgColor
                                : theme.darkTheme.bgColor
                            }
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              id="SVGRepo_bgCarrier"
                              strokeWidth="0"
                            ></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {' '}
                              <path d="M16 4c7.72 0 14 4.486 14 10s-6.28 10-14 10l-0.829 0.003c-0.55 0-0.909-0.015-1.471-0.099l-1.12-0.16-0.719 0.87c-0.331 0.399-2.017 1.785-3.878 2.677 0.378-1.001 0.657-2.094 0.683-3.175l0.010-0.059v-1.395l-1.090-0.556c-3.55-1.816-5.585-4.77-5.585-8.106 0-5.514 6.28-10 14-10zM16 2c-8.838 0-16 5.373-16 12 0 4.127 2.446 7.724 6.675 9.886 0 0.026-0.008 0.044-0.008 0.073 0 1.793-1.005 3.765-1.594 4.779h0.002c-0.046 0.109-0.074 0.229-0.074 0.357 0 0.503 0.405 0.906 0.907 0.906 0.075 0 0.196-0.015 0.239-0.015 0.011 0 0.016 0 0.016 0.003 3.125-0.511 6.561-3.271 7.245-4.104 0.703 0.105 1.177 0.12 1.765 0.12 0.248 0 0.515-0.003 0.829-0.003 8.836 0 16-5.372 16-12 0-6.627-7.164-12-16-12z"></path>{' '}
                            </g>
                          </svg>
                          <span>{comments.length}</span>
                        </div>
                      </div>
                    </Style.PostInfo>
                  </Style.PostItem>
                </Link>
              )
            )}
            {isFetchingNextPage ? (
              <PostItem>
                <Item className="post-title"></Item>
                <Item className="post-content"></Item>
                <PostInfo>
                  <Item width={30}></Item>
                  <Item width={68}></Item>
                </PostInfo>
              </PostItem>
            ) : (
              <div
                ref={ref}
                style={{ height: '1px' }}
              ></div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default PostList;
