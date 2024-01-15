import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Common/Button';
import SearchBar from '@/components/Common/SearchBar';
import PostList from '@/components/Mypage/PostList';
import useChannelPost from '@/hooks/api/useChannelPost';
import { theme } from '@/theme';
import { UserPost } from '@/types/ResponseType';
import * as Style from './index.style';

function ReceivedPostListPage() {
  const { data } = useChannelPost();
  const navigate = useNavigate();

  const [posts, setPosts] = useState<UserPost[]>(data);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const handleButtonClick = () => {
    navigate('/channel/new');
  };

  const handleChangeKeyword = (keyword: string) => {
    const filteredPosts = data?.filter(
      (post: UserPost) =>
        post.title.includes(keyword) || post.content.includes(keyword)
    );
    setPosts(filteredPosts);
  };

  if (!data.length) {
    return (
      <Style.UnGeneratedWrap>
        <span className="info-text">아직 생성된 박이 없어요!</span>
        <Button
          content="박 만들러 가기"
          styleOption={{
            width: '100%',
            fontSize: theme.typography.mypage_regular.fontSize
          }}
          onClick={handleButtonClick}
        />
      </Style.UnGeneratedWrap>
    );
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
