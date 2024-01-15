import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteLikeDelete } from '@/api/like';

interface mutationProps {
  id: string;
}

/** 포스트 좋아요 mutation */
export const useLikeDeleteMutation = (postId: string) => {
  const queryClient = useQueryClient();

  const likeDeleteMutation = useMutation({
    mutationFn: ({ id }: mutationProps) => deleteLikeDelete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
    onError: () => toast.error('좋아요 취소를 실패하였습니다.')
  });

  return { mutationLikeDelete: likeDeleteMutation.mutate };
};
