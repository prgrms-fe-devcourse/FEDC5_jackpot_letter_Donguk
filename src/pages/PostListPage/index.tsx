import PostList from '@/components/Mypage/PostList';
import useAuthorPost from '@/hooks/api/useAuthorPost';
import { ACCESS_USER_ID } from '@/constants/api';
import { UserPost } from '@/types/ResponseType';
import { getStorage } from '@/utils/LocalStorage';

function PostListPage() {
  const userId = getStorage(ACCESS_USER_ID, '');

  const { data, isLoading } = useAuthorPost(userId);

  return (
    <>
      <PostList
        type="post"
        posts={!isLoading ? (data as UserPost[]) : []}
      />
    </>
  );
}

export default PostListPage;
