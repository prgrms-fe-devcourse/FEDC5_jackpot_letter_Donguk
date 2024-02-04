import PostList from '@/components/Mypage/PostList';
import useAuthorPost from '@/hooks/api/useAuthorPost';

function PostListPage() {
  const COUNT = 10;

  const {
    data: posts,
    fetchNextPage,
    isFetchingNextPage
  } = useAuthorPost(COUNT);

  return (
    <>
      <PostList
        type="post"
        posts={posts}
        nextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
}

export default PostListPage;
