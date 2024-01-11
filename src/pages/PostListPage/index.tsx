import PostList from '@/components/Mypage/PostList';
import useAuthorPost from '@/hooks/api/useAuthorPost';
import { ACCESS_USER_ID } from '@/constants/api';
import { getStorage } from '@/utils/LocalStorage';

function PostListPage() {
  const userId = getStorage(ACCESS_USER_ID, '');
  const { data } = useAuthorPost(userId);

  return (
    <>
      <PostList
        type="post"
        posts={data}
      />
    </>
  );
}

export default PostListPage;
