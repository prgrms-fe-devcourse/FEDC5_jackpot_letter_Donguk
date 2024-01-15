import { FollowType } from '@/types/ResponseType';
import FollowListItem from '../FollowListItem';
import * as Style from './index.style';

interface FollowListProps {
  type: 'follower' | 'following';
  followList: FollowType[];
}

function FollowList({ type, followList }: FollowListProps) {
  return (
    <Style.Container>
      <Style.FollowItemList>
        {followList.map((follow) => (
          <FollowListItem
            key={follow._id}
            image={follow.image}
            name={follow.name}
            _id={follow._id}
            type={type}
            userId={follow.userId}
          />
        ))}
      </Style.FollowItemList>
    </Style.Container>
  );
}

export default FollowList;
