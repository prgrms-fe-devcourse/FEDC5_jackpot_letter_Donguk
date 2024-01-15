import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { createChannel } from '@/api/channel';

export interface MutationProps {
  name: string;
  description: string;
}

export const useCreateChannel = () => {
  const navigate = useNavigate();

  const muataion = useMutation({
    mutationFn: (channelOption: MutationProps) => createChannel(channelOption),
    onSuccess: () => {
      toast.success('채널을 생성하였습니다.');
      return navigate('/');
    },
    onError: (e) => {
      console.log(e);
      toast.error('채널을 생성하는데 실패하였습니다.');
    }
  });

  return { mutate: muataion.mutate };
};
