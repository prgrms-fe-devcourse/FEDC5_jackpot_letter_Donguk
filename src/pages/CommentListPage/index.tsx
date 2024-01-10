import { useAtomValue } from 'jotai';
import Comments from '@/components/Mypage/Comments';
import useUserComment from '@/hooks/api/useUserComment';
import { userAtom } from '@/store/user';
import { UserComment } from '@/types/ResponseType';

function CommentListPage() {
  const userData = useAtomValue(userAtom);
  const { pending, data } = useUserComment(userData);

  return (
    <>
      <Comments
        isLoading={pending}
        comments={!pending && data.length ? (data as UserComment[]) : []}
      />
    </>
  );
}

export default CommentListPage;
