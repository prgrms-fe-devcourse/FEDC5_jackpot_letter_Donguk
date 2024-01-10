import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLikeDelete } from '@/api/like';

interface mutationProps {
  JWTtoken: string;
  id: string;
}

/** 포스트 좋아요 mutation */
export const useLikeDeleteMutation = (postId: string) => {
  const queryClient = useQueryClient();

  const likeDeleteMutation = useMutation({
    mutationFn: ({ JWTtoken, id }: mutationProps) =>
      deleteLikeDelete(JWTtoken, id),
    onSuccess: () => {
      console.log('좋아요 취소가 정상적으로 전달되었습니다');
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
    onError: () => console.log('좋아요 취소가 실패하였습니다')
  });

  return { mutationLikeDelete: likeDeleteMutation.mutate };
};
