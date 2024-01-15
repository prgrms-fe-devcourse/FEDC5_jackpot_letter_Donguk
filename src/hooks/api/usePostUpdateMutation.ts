import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postPostUpdate } from '@/api/post';

interface mutationProps {
  title: string;
  content: string;
  postId: string;
  image?: string | null;
  imageToDeletePublicId?: string;
  channelId: string;
  color: string;
}

/** 포스트 수정 mutataion */
export const usePostUpdateMutation = (postId: string) => {
  const queryClient = useQueryClient();

  const postUpdateMutation = useMutation({
    mutationFn: ({
      postId,
      title,
      content,
      image = null,
      imageToDeletePublicId = '',
      channelId,
      color
    }: mutationProps) =>
      postPostUpdate(
        postId,
        title,
        content,
        image,
        imageToDeletePublicId,
        channelId,
        color
      ),
    onSuccess: () => {
      toast.success('포스트가 정상적으로 수정되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['channelPosts', postId] });
    },
    onError: () =>
      toast.error('본인이 작성한 포스트가 아니라면 수정할 수 없습니다.')
  });

  return { mutationPostUpdate: postUpdateMutation.mutate };
};
