import { useMutation } from '@tanstack/react-query';
import { postPostCreate } from '@/api/post';

interface mutationProps {
  JWTtoken: string;
  title: string;
  content: string;
  image: string | null;
  channelId: string;
}

/** 포스트 생성 mutation */
export const usePostCreateMutation = () => {
  const postCreateMutation = useMutation({
    mutationFn: ({
      JWTtoken,
      title,
      content,
      image,
      channelId
    }: mutationProps) =>
      postPostCreate(JWTtoken, title, content, image, channelId),
    onSuccess: () => console.log('편지가 정상적으로 전달되었습니다.'),
    onError: (error) => console.log('편지가 전달되지 못하였습니다.', error)
  });

  return { mutationPostCreate: postCreateMutation.mutate };
};
