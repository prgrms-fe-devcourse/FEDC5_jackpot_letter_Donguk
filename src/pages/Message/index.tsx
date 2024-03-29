import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DM from '@components/Message/DM';
import Header from '@components/Message/Header';
import SendMessage from '@components/Message/SendMessage';
import { useAtomValue } from 'jotai';
import { useMessageSeen } from '@/hooks/api/useMessageSeen';
import { useNotificationSeen } from '@/hooks/api/useNotificationSeen';
import useUser from '@/hooks/api/useUser';
import { darkAtom } from '@/store/theme';
import * as Style from './index.style';

function Message() {
  const { receiverId } = useParams() as { receiverId: string };
  const darkMode = useAtomValue(darkAtom);
  const { data: receiverData } = useUser(receiverId); // 대화 상대의 데이터
  const { mutate: notificationSeenMutate } = useNotificationSeen(); // 알림 읽음처리
  const { mutate: messageSeenMutate } = useMessageSeen(receiverId); // 메시지 읽음 처리

  useEffect(() => {
    if (receiverData) {
      notificationSeenMutate();
      messageSeenMutate(receiverData._id);
    }
  }, [receiverData]);

  return (
    <Style.MessageContainer>
      <Style.HeaderContainer>
        {receiverData && (
          <Header
            fullName={receiverData.fullName}
            userImage={receiverData.image}
            isOnline={receiverData.isOnline}
          />
        )}
      </Style.HeaderContainer>
      <Style.MessageBody>
        {receiverData && (
          <DM
            darkMode={darkMode}
            receiverData={receiverData}
          />
        )}
      </Style.MessageBody>
      <Style.MessageFooter>
        <SendMessage receiverId={receiverId} />
      </Style.MessageFooter>
    </Style.MessageContainer>
  );
}

export default Message;
