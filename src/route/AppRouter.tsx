import { ReactElement } from 'react';
import PasswordUpdate from '@/components/Mypage/PasswordUpdate';
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
import Mypage from '@/pages/Mypage';
import PostListPage from '@/pages/PostListPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';

interface RouteProps {
  path: string;
  component: ReactElement;
  exact: boolean;
}

interface userRoutes {
  page: Array<RouteProps>;
  mypage: Array<RouteProps>;
}

// 로그인 상태 접근
const userRoutes: userRoutes = {
  page: [
    { path: PATH.MYPAGE, exact: true, component: <Mypage /> },
    {
      path: PATH.CHANNEL_CREATE,
      exact: true,
      component: <ChannelTemplate />
    }
  ],
  mypage: [
    {
      path: PATH.MYPAGE_PROFILE_UPDATE,
      exact: true,
      component: <ProfileUpdate />
    },
    { path: PATH.MYPAGE_FOLLOW, exact: true, component: <FollowPage /> },
    { path: PATH.MYPGE_POST_LIST, exact: true, component: <PostListPage /> },
    { path: PATH.MYPGE_LIKE_LIST, exact: true, component: <LikeListPage /> },
    {
      path: PATH.MYPGE_RECEIVED_POST_LIST,
      exact: true,
      component: <LikeListPage />
    },
    {
      path: PATH.MYPGE_COMMNET_LIST,
      exact: true,
      component: <CommentListPage />
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
  { path: `${PATH.CHANNEL}/:channelId`, exact: false, component: <Channel /> },
  { path: PATH.POST, exact: true, component: <Post /> },
  { path: PATH.COMMENT, exact: true, component: <Comment /> }
];

export { userRoutes, authRoutes, commonRoutes };
