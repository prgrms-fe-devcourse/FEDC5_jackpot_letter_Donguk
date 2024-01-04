import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createChannel } from '@/api/channel';

export const useNewChannel = () => {
  const navigate = useNavigate();

  const createChannelMutation = useMutation({
    mutationFn: createChannel,
    onSuccess: () => {
      toast.success('채널을 생성하였습니다.');
      return navigate('/');
    },
    onError: () => {
      toast.error('채널을 생성하는데 실패하였습니다.');
    }
  });

  return { mutateNewChannel: createChannelMutation.mutate };
};
