import { Follow as FollowDefaultType } from '@/types/ResponseType';
import ProfileImg from '../ProfileImg';
import * as Style from './index.style';

interface FollowListProps {
  type: 'follower' | 'following';
  followList: FollowType[];
}

interface FollowType extends FollowDefaultType {
  image: string;
}

function FollowList({ type, followList }: FollowListProps) {
  return (
    <Style.Container>
      <Style.FollowItemList>
        {followList.map(({ image, user, _id }) => (
          <li
            className="follow-item"
            key={_id}
          >
            <ProfileImg
              image={image}
              alt="user profile image"
              width={2.5}
              height={2.5}
            />
            <span>{user}</span>
            <button>{type === 'follower' ? '삭제' : '팔로잉'}</button>
          </li>
        ))}
      </Style.FollowItemList>
    </Style.Container>
  );
}

export default FollowList;
