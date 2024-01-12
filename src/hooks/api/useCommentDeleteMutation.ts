import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postPostCommentDelete } from '@/api/post';

interface mutationProprs {
  JWTtoken: string;
  id: string;
}
/** 댓글 삭제 mutation */
export const useCommentDeleteMutation = (postId: string) => {
  const queryClient = useQueryClient();

  const commentDeleteMutation = useMutation({
    mutationFn: ({ JWTtoken, id }: mutationProprs) =>
      postPostCommentDelete(JWTtoken, id),
    onSuccess: () => {
      toast.success('댓글이 정상적으로 삭제 되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
    onError: () =>
      toast.error('본인이 작성한 댓글이 아니라면 삭제할 수 없습니다.')
  });

  return { mutationCommentDelete: commentDeleteMutation.mutate };
};
