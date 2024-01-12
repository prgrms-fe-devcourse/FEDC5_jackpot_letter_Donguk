import { useParams } from 'react-router-dom';
import DM from '@components/Message/DM';
import Header from '@components/Message/Header';
import SendMessage from '@components/Message/SendMessage';
import { useAtomValue } from 'jotai';
import useUser from '@/hooks/api/useUser';
import { tokenAtom } from '@/store/auth';
import * as Style from './index.style';

function Message() {
  const JWTtoken = useAtomValue(tokenAtom);
  const { receiverId } = useParams() as { receiverId: string };

  const { data: receiverData } = useUser(receiverId); // 대화 상대의 데이터

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
        <DM
          JWTtoken={JWTtoken}
          receiverData={receiverData}
        />
      </Style.MessageBody>
      <Style.MessageFooter>
        <SendMessage />
      </Style.MessageFooter>
    </Style.MessageContainer>
  );
}

export default Message;
