import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { postPostCreate } from '@/api/post';

interface mutationProps {
  title: string;
  content: string;
  image: string | null;
  channelId: string;
  color: string;
}

/** 포스트 생성 mutation */
export const usePostCreateMutation = () => {
  const postCreateMutation = useMutation({
    mutationFn: ({ title, content, image, channelId, color }: mutationProps) =>
      postPostCreate(title, content, image, channelId, color),
    onSuccess: () => toast.success('포스트가 정상적으로 작성되었습니다.'),
    onError: () => toast.error('포스트 작성에 실패하였습니다.')
  });

  return { mutationPostCreate: postCreateMutation.mutate };
};
