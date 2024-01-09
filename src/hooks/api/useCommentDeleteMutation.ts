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
      console.log('댓글이 정상적으로 삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
    onError: () => console.log('댓글이 정상적으로 삭제 되지 않았습니다.')
  });

  return { mutationCommentDelete: commentDeleteMutation.mutate };
};
