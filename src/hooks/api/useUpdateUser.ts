import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '@/api/user';
import { getStorage } from '@/utils/LocalStorage';

function useUpdateUser() {
  const ACCESS_TOKEN = getStorage('ACCESS_TOKEN', '');
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedFullName: string) => {
      return await updateUser(updatedFullName, {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      });
    },
    onError: (context) => {
      console.log(context);
      toast.error('이름 변경에 실패했습니다.');
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success('이름 변경 완료');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    }
  });
}

export default useUpdateUser;
