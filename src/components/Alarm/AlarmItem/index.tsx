import { Content, Notification, Time } from './index.style';

function AlarmItem() {
  return (
    <Notification>
      <Content>
        <img src="/src/assets/Comment.svg" />
        <div>
          <div>최익</div>
          <span>메시지가 도착했어요.</span>
        </div>
      </Content>
      <Time>오후 2:06</Time>
    </Notification>
  );
}

export default AlarmItem;
