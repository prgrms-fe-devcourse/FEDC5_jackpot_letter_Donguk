import DM from '@components/Message/DM';
import Header from '@components/Message/Header';
import SendMessage from '@components/Message/SendMessage';
import * as Style from './index.style';

function Message() {
  return (
    <Style.MessageContainer>
      <Style.HeaderContainer>
        <Header />
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
