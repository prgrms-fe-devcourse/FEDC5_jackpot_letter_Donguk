import { useAtomValue } from 'jotai';
import Comments from '@/components/Mypage/Comments';
import useUserComment from '@/hooks/api/useUserComment';
import { userAtom } from '@/store/user';

function CommentListPage() {
  const userData = useAtomValue(userAtom);
  const { data } = useUserComment(userData);

  return (
    <>
      <Comments comments={data} />
    </>
  );
}

export default CommentListPage;
