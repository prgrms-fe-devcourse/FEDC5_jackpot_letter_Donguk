import { Route, Routes } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import PasswordUpdate from './components/Mypage/PasswordUpdate';
import ProfileUpdate from './components/Mypage/ProfileUpdate';
import CommentListPage from './pages/CommentListPage';
import FollowPage from './pages/FollowPage';
import LikeListPage from './pages/LikeListPage';
import Mypage from './pages/Mypage';
import PostListPage from './pages/PostListPage';
import global from './styles/global';
import reset from './styles/reset';
import { theme } from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={[reset, global]} />
        <Routes>
          <Route
            path="/mypage"
            element={<Mypage />}
          >
            <Route
              path="/mypage/profile-update"
              element={<ProfileUpdate />}
            />
            <Route
              path="/mypage/follow"
              element={<FollowPage />}
            />
            <Route
              path="/mypage/post-list"
              element={<PostListPage />}
            />
            <Route
              path="/mypage/like-list"
              element={<LikeListPage />}
            />
            <Route
              path="/mypage/comment-list"
              element={<CommentListPage />}
            />
            <Route
              path="/mypage/password-update"
              element={<PasswordUpdate />}
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
