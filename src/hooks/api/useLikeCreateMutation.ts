import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLikeCreate } from '@/api/like';

interface mutationProps {
  postId: string;
}

/** 포스트 좋아요 mutation */
export const useLikeCreateMutation = (postId: string) => {
  const queryClient = useQueryClient();

  const likeCreateMutation = useMutation({
    mutationFn: ({ postId }: mutationProps) => postLikeCreate(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
    onError: () => toast.error('좋아요가 정상적으로 전달되지 않았습니다.')
  });

  return { mutationLikeCreate: likeCreateMutation.mutate };
};
