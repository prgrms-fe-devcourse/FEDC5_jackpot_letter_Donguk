import AlarmItem from '../AlarmItem';
import { NotificationContainer } from './index.style';

const TEST = [1, 2, 3, 4];
function AlarmList() {
  return (
    <NotificationContainer>
      {TEST.map((item) => (
        <AlarmItem />
      ))}
    </NotificationContainer>
  );
}

export default AlarmList;
