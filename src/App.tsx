import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from '@components/Post';
import Comment from '@components/PostComment';
import Button from './components/Common/Button';
import SignIn from './components/Common/SignIn';
import PasswordUpdate from './components/Mypage/PasswordUpdate';
import ProfileUpdate from './components/Mypage/ProfileUpdate';
import useModal from './hooks/useModal';
import CommentListPage from './pages/CommentListPage';
import FollowPage from './pages/FollowPage';
import LikeListPage from './pages/LikeListPage';
import Mypage from './pages/Mypage';
import PostListPage from './pages/PostListPage';
import { authRoutes, userRoutes } from './route/AppRouter';
import AuthMiddleware from './route/AuthMiddleware';
import { theme } from './theme';

function App() {
  const toastStyle = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem'
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/post"
            element={<Post />}
          />
          <Route
            path="/comment"
            element={<Comment />}
          />
          <Route
            path="/mypage"
            element={<Mypage />}>
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
      </BrowserRouter>

      <Toaster
        toastOptions={{
          style: { ...toastStyle }
        }}
      />
    </>
  );
}

export default App;
