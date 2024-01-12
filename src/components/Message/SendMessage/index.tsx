import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { useMessageCreateMutation } from '@/hooks/api/useMessageCreateMutation';
import { useNewNotification } from '@/hooks/api/useNewNotification';
import { idAtom, tokenAtom } from '@/store/auth';
import * as Style from './index.style';

interface useFormProps {
  message: string;
}

function SendMessage() {
  const [text, setText] = useState('');
  const JWTtoken = useAtomValue(tokenAtom);
  const userId = useAtomValue(idAtom);
  const { receiverId } = useParams() as { receiverId: string };
  const { mutationMessageCreate } = useMessageCreateMutation(receiverId);
  const { mutateNewNotification } = useNewNotification();

  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit
  } = useForm<useFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      message: ''
    }
  });

  /** 입력 크기에 맞게 textarea 높이 조절 (5줄 제한) */
  const handleTextareaOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.currentTarget.value;
    setText(value);

    const maxHeight = 5 * 20;
    e.target.style.height = '2.5rem';

    const scrollHeight = e.target.scrollHeight;
    e.target.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
  };

  /** textarea 메시지 서버 전송 */
  const handleTextareaOnSubmit = (data: useFormProps) => {
    console.log(data);
    /** 메시지 전송 */
    mutationMessageCreate({
      JWTtoken,
      message: data.message,
      receiver: receiverId
    });
    /** 알림 생성 */
    mutateNewNotification({
      notificationType: 'MESSAGE',
      notificationTypeId: '새로운 메시지가 도착했어요!',
      userId,
      postId: null
    });
  };

  useEffect(() => {
    /** react-hook-form validation */
    if (isSubmitting) {
      errors.message ? toast.error(errors.message.message as string) : null;
    }

    /** 메시지 전송 후 textarea 초기화 */
    if (isSubmitSuccessful) setText('');
  }, [isSubmitting, isSubmitSuccessful]);

  return (
    <Style.Form onSubmit={handleSubmit(handleTextareaOnSubmit)}>
      <Style.sendMessage
        value={text}
        placeholder="메시지를 보내보세요."
        {...register('message', {
          required: '메시지를 반드시 입력하셔야합니다.',
          onChange(event) {
            handleTextareaOnChange(event);
          }
        })}
      />
      <Style.IconButton type="submit">
        <Style.sendIcon src="/src/assets/send.svg" />
      </Style.IconButton>
    </Style.Form>
  );
}

export default SendMessage;
