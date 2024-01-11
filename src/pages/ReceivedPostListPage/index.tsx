import PostList from '@/components/Mypage/PostList';
import useChannelPost from '@/hooks/api/useChannelPost';

function ReceivedPostListPage() {
  const { data } = useChannelPost();
  return (
    <>
      <PostList
        type="post"
        posts={data}
      />
    </>
  );
}

export default ReceivedPostListPage;
