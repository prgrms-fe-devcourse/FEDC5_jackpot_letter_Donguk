import EmptyChannel from '@/components/Common/EmptyChannel';
import PostList from '@/components/Mypage/PostList';
import useChannelPost from '@/hooks/api/useChannelPost';

function ReceivedPostListPage() {
  const { data } = useChannelPost();

  if (!data.length) {
    return <EmptyChannel />;
  }

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
