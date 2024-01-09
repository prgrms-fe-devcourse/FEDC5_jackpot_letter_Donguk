import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { updatePassword } from '@/api/user';
import { getStorage } from '@/utils/LocalStorage';

function useUpdatePassword() {
  const ACCESS_TOKEN = getStorage('ACCESS_TOKEN', '');

  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (updatedPassword: string) => {
      return await updatePassword(updatedPassword, {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      });
    },
    onError: (context) => {
      console.log(context);
      toast.error('변경에 실패했습니다.');
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success('성공적으로 변경됐습니다.');
      navigate('/mypage');
    }
  });
}

export default useUpdatePassword;
