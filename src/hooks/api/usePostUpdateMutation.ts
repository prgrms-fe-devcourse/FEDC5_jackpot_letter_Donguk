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
    onSuccess: () => console.log('편지가 정상적으로 수정되었습니다.'),
    onError: () => console.log('편지가 정상적으로 수정되지 않았습니다.')
  });

  return { mutationPostUpdate: postUpdateMutation.mutate };
};
