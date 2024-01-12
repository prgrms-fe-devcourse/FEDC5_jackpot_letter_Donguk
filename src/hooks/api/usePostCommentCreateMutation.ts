import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postPostCommentCreate } from '@/api/post';

interface mutationProps {
  JWTtoken: string;
  title: string;
  comment: string;
  postId: string;
}

/** 댓글 생성 mutation */
export const usePostCommentCreateMutation = (postId: string) => {
  const queryClient = useQueryClient();

  const postCommentCreateMutation = useMutation({
    mutationFn: ({ JWTtoken, title, comment, postId }: mutationProps) =>
      postPostCommentCreate(JWTtoken, title, comment, postId),
    onSuccess: () => {
      toast.success('댓글을 성공적으로 작성하였습니다.');
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
    onError: () => toast.error('댓글을 작성하는데 실패하였습니다.')
  });

  return { mutationCommentCreate: postCommentCreateMutation.mutate };
};
