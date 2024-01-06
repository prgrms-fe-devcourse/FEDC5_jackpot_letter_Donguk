import { useAtomValue } from 'jotai';
import PostList from '@/components/Mypage/PostList';
import useUserLikeList from '@/hooks/api/useUserLikeList';
import { userAtom } from '@/store/user';
import { UserPost } from '@/types/ResponseType';

function LikeListPage() {
  const userData = useAtomValue(userAtom);

  const { pending, data } = useUserLikeList(userData);

  return (
    <>
      <PostList
        type="like"
        posts={!pending && data.length ? (data as UserPost[]) : []}
      />
    </>
  );
}

export default LikeListPage;
