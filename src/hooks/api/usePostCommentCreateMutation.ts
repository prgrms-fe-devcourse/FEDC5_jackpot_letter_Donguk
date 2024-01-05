import { useMutation } from '@tanstack/react-query';
import { postPostCommentCreate } from '@/api/post';

interface mutationProps {
  JWTtoken: string;
  comment: string;
  postId: string;
}

/** 댓글 생성 mutation */
export const usePostCommentCreateMutation = () => {
  const postCommentCreateMutation = useMutation({
    mutationFn: ({ JWTtoken, comment, postId }: mutationProps) =>
      postPostCommentCreate(JWTtoken, comment, postId),
    onSuccess: () => console.log('댓글이 성공적으로 달렸습니다.'),
    onError: () => console.log('댓글이 전달되지 못하였습니다')
  });

  return { mutationCommentCreate: postCommentCreateMutation.mutate };
};
