import { useEffect, useState } from 'react';
import EmptyChannel from '@/components/Common/EmptyChannel';
import SearchBar from '@/components/Common/SearchBar';
import PostList from '@/components/Mypage/PostList';
import useChannelPost from '@/hooks/api/useChannelPost';
import { UserPost } from '@/types/ResponseType';
import * as Style from './index.style';

function ReceivedPostListPage() {
  const { data } = useChannelPost();

  const [posts, setPosts] = useState<UserPost[]>(data);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const handleChangeKeyword = (keyword: string) => {
    const filteredPosts = data?.filter(
      (post: UserPost) =>
        post.title.includes(keyword) || post.content.includes(keyword)
    );
    setPosts(filteredPosts);
  };

  if (!data.length) {
    return <EmptyChannel />;
  }
  return (
    <Style.Container>
      <SearchBar
        placeholder={'작성자, 내용을 검색해보세요.'}
        handleChangeKeyword={handleChangeKeyword}
      />
      <PostList
        type="post"
        posts={posts}
      />
    </Style.Container>
  );
}

export default ReceivedPostListPage;
