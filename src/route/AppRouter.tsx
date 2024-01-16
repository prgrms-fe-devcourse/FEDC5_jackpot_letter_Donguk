import { ReactElement, Suspense } from 'react';
import CommentSkeleton from '@/components/Mypage/CommentSkeleton';
import PasswordUpdate from '@/components/Mypage/PasswordUpdate';
import PostSkeleton from '@/components/Mypage/PostSkeleton';
import ProfileUpdate from '@/components/Mypage/ProfileUpdate';
import Post from '@/components/Post';
import Comment from '@/components/PostComment';
import { PATH } from '@/constants/path';
import Channel from '@/pages/Channel';
import ChannelList from '@/pages/ChannelList';
import ChannelTemplate from '@/pages/ChannelTemplate';
import CommentListPage from '@/pages/CommentListPage';
import FollowPage from '@/pages/FollowPage';
import LikeListPage from '@/pages/LikeListPage';
import Message from '@/pages/Message';
import MessageListPage from '@/pages/MessageListPage';
import Mypage from '@/pages/Mypage';
import PostCreate from '@/pages/PostCreate';
import PostListPage from '@/pages/PostListPage';
import ReceivedPostListPage from '@/pages/ReceivedPostListPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import UserPage from '@/pages/UserPage';

interface RouteProps {
  path: string;
  component: ReactElement;
  exact: boolean;
}

interface userRoutes {
  page: Array<RouteProps>;
  mypage: Array<RouteProps>;
}

interface SuspenseCompProps {
  children: ReactElement;
}

function SuspenseComponent({ children }: SuspenseCompProps) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

function PostSuspenseComponent({ children }: SuspenseCompProps) {
  return <Suspense fallback={<PostSkeleton />}>{children}</Suspense>;
}

// 로그인 상태 접근
const userRoutes: userRoutes = {
  page: [
    {
      path: PATH.CHANNEL_CREATE,
      exact: true,
      component: <ChannelTemplate />
    },
    { path: `${PATH.COMMENT}/:postId`, exact: true, component: <Comment /> },
    { path: PATH.MESSAGELIST, exact: true, component: <MessageListPage /> },
    { path: `${PATH.MESSAGE}/:receiverId`, exact: true, component: <Message /> }
  ],
  mypage: [
    { path: PATH.MYPAGE, exact: true, component: <Mypage /> },
    {
      path: PATH.MYPAGE_PROFILE_UPDATE,
      exact: true,
      component: <ProfileUpdate />
    },
    {
      path: PATH.MYPAGE_FOLLOW,
      exact: true,
      component: <FollowPage />
    },
    {
      path: PATH.MYPGE_POST_LIST,
      exact: true,
      component: (
        <PostSuspenseComponent>
          <PostListPage />
        </PostSuspenseComponent>
      )
    },
    {
      path: PATH.MYPGE_LIKE_LIST,
      exact: true,
      component: (
        <PostSuspenseComponent>
          <LikeListPage />
        </PostSuspenseComponent>
      )
    },
    {
      path: PATH.MYPGE_RECEIVED_POST_LIST,
      exact: true,
      component: (
        <PostSuspenseComponent>
          <ReceivedPostListPage />
        </PostSuspenseComponent>
      )
    },
    {
      path: PATH.MYPGE_COMMNET_LIST,
      exact: true,
      component: (
        <Suspense fallback={<CommentSkeleton />}>
          <CommentListPage />
        </Suspense>
      )
    },
    {
      path: PATH.MYPGE_PASSWORD_UPDATE,
      exact: true,
      component: <PasswordUpdate />
    }
  ]
};

// 로그인 상태x 접근
const authRoutes: Array<RouteProps> = [
  { path: PATH.SIGNIN, exact: true, component: <SignInPage /> },
  { path: PATH.SIGNUP, exact: true, component: <SignUpPage /> }
];

// 모든 상태에서 접근 가능
const commonRoutes: Array<RouteProps> = [
  { path: PATH.ROOT, exact: true, component: <ChannelList /> },
  {
    path: `${PATH.CHANNEL}/:channelName`,
    exact: false,
    component: (
      <SuspenseComponent>
        <Channel />
      </SuspenseComponent>
    )
  },
  { path: PATH.POST_CREATE, exact: true, component: <PostCreate /> },
  { path: `${PATH.USER}/:userId`, exact: true, component: <UserPage /> },
  { path: `${PATH.POST}/:channelId`, exact: true, component: <Post /> }
];

export { userRoutes, authRoutes, commonRoutes };
