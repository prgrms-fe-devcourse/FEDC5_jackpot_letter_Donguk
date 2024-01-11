import { useParams } from 'react-router-dom';
import DM from '@components/Message/DM';
import Header from '@components/Message/Header';
import SendMessage from '@components/Message/SendMessage';
import useUser from '@/hooks/api/useUser';
import * as Style from './index.style';

function Message() {
  const { receiverId } = useParams() as { receiverId: string };

  const { data } = useUser(receiverId);

  return (
    <Style.MessageContainer>
      <Style.HeaderContainer>
        {data && (
          <Header
            fullName={data.fullName}
            userImage={data.image}
            isOnline={data.isOnline}
          />
        )}
      </Style.HeaderContainer>
      <Style.MessageBody>
        <DM />
      </Style.MessageBody>
      <Style.MessageFooter>
        <SendMessage />
      </Style.MessageFooter>
    </Style.MessageContainer>
  );
}

export default Message;
