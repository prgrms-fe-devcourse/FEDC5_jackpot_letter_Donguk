import { useAtomValue } from 'jotai';
import PostList from '@/components/Mypage/PostList';
import useUserLikeList from '@/hooks/api/useUserLikeList';
import { userAtom } from '@/store/user';

function LikeListPage() {
  const userData = useAtomValue(userAtom);

  const { data } = useUserLikeList(userData);

  return (
    <>
      <PostList
        type="like"
        posts={data}
      />
    </>
  );
}

export default LikeListPage;
