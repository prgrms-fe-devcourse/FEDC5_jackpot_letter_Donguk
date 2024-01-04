import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from '@components/Post';
import Comment from '@components/PostComment';
import PasswordUpdate from './components/Mypage/PasswordUpdate';
import ProfileUpdate from './components/Mypage/ProfileUpdate';
import ChannelList from './pages/ChannelList';
import CommentListPage from './pages/CommentListPage';
import FollowPage from './pages/FollowPage';
import LikeListPage from './pages/LikeListPage';
import Mypage from './pages/Mypage';
import PostListPage from './pages/PostListPage';

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
            path="/"
            element={<ChannelList />}
          />
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
