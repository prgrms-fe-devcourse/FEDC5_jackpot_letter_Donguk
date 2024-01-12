import { useNavigate } from 'react-router-dom';
import Button from '@/components/Common/Button';
import PostList from '@/components/Mypage/PostList';
import useChannelPost from '@/hooks/api/useChannelPost';
import { theme } from '@/theme';
import * as Style from './index.style';

function ReceivedPostListPage() {
  const { data } = useChannelPost();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/channel/new');
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
    <>
      <PostList
        type="post"
        posts={data}
      />
    </>
  );
}
export default ReceivedPostListPage;
