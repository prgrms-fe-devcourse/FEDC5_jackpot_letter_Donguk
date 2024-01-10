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
    onSuccess: () => console.log('채널 삭제 성공, 페이지 이동합니다.'),
    onError: () => console.log('채널 삭제 실패')
  });

  return { mutationPostDelete: postDeleteMutation.mutate };
};
