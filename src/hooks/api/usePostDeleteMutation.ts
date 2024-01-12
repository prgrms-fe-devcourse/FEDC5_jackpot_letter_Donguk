import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { postPostDelete } from '@/api/post';

interface mutationProps {
  JWTtoken: string;
  id: string;
}

/** 특정 포스트 삭제 mutation */
export const usePostDeleteMutation = () => {
  const postDeleteMutation = useMutation({
    mutationFn: ({ JWTtoken, id }: mutationProps) =>
      postPostDelete(JWTtoken, id),
    onSuccess: () => toast.success('포스트 삭제를 성공하였습니다.'),
    onError: () =>
      toast.error(
        '본인이 작성한 포스트가 아니라면 포스트를 삭제 할 수 없습니다.'
      )
  });

  return { mutationPostDelete: postDeleteMutation.mutate };
};
