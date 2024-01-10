import {
  Content,
  Notification,
  NotificationContainer,
  Time
} from './index.style';

const TEST = [1, 2, 3, 4];
function AlarmList() {
  return (
    <NotificationContainer>
      {TEST.map((item) => (
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
      ))}
    </NotificationContainer>
  );
}

export default AlarmList;
