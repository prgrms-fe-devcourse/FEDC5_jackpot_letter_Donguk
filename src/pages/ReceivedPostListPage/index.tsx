import PostList from '@/components/Mypage/PostList';
import useChannelPost from '@/hooks/api/useChannelPost';
import { UserPost } from '@/types/ResponseType';

function ReceivedPostListPage() {
  const { data, isLoading } = useChannelPost();

  return (
    <>
      <PostList
        type="post"
        posts={!isLoading && data ? (data as UserPost[]) : []}
      />
    </>
  );
}

export default ReceivedPostListPage;
