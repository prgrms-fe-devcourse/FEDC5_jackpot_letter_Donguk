import * as Style from './index.style';

function FollowSkeleton() {
  return (
    <Style.Container>
      <Style.FollowItemList>
        <li className="follow-item">
          <div>
            <Style.ProfileImg />
          </div>
          <Style.Item
            width={20}
            className="name"
          ></Style.Item>
          <Style.FollowBtn></Style.FollowBtn>
        </li>
      </Style.FollowItemList>
    </Style.Container>
  );
}

export default FollowSkeleton;
