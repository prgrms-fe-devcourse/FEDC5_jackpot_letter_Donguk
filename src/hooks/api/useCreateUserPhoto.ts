import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserPhoto } from '@/api/user';

interface FormData {
  isCover: boolean;
  image: File;
}

function useCreateUserPhoto() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FormData) => {
      const res = await updateUserPhoto(data.isCover, data.image);
      return res;
    },
    onError: (context) => {
      console.log(context);
      toast.error('사진 변경에 실패했습니다.');
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success('사진 변경 완료');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    }
  });
}

export default useCreateUserPhoto;
