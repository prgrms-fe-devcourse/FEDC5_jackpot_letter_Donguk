import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { postPostUpdate } from '@/api/post';

interface mutationProps {
  JWTtoken: string;
  title: string;
  content: string;
  postId: string;
  image?: string | null;
  imageToDeletePublicId?: string;
  channelId: string;
}

/** 포스트 수정 mutataion */
export const usePostUpdateMutation = () => {
  const postUpdateMutation = useMutation({
    mutationFn: ({
      JWTtoken,
      postId,
      title,
      content,
      image = null,
      imageToDeletePublicId = '',
      channelId
    }: mutationProps) =>
      postPostUpdate(
        JWTtoken,
        postId,
        title,
        content,
        image,
        imageToDeletePublicId,
        channelId
      ),
    onSuccess: () => toast.success('포스트가 정상적으로 수정되었습니다.'),
    onError: () =>
      toast.error('본인이 작성한 포스트가 아니라면 수정할 수 없습니다.')
  });

  return { mutationPostUpdate: postUpdateMutation.mutate };
};
