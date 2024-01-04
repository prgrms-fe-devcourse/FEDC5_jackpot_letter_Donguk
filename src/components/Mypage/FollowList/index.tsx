import { Follow as FollowDefaultType } from '@/types/ResponseType';
import ProfileImg from '../ProfileImg';
import * as Style from './index.style';

interface FollowListProps {
  type: 'follower' | 'following';
  followList: FollowType[];
}

interface FollowType extends FollowDefaultType {
  name: string;
  image?: string;
}

function FollowList({ type, followList }: FollowListProps) {
  return (
    <Style.Container>
      <Style.FollowItemList>
        {followList.map(({ image, name, _id }) => (
          <li
            className="follow-item"
            key={_id}
          >
            <ProfileImg
              image={image ?? ''}
              alt="user profile image"
              width={2.5}
              height={2.5}
            />
            <span>{name}</span>
            <button>{type === 'follower' ? '삭제' : '팔로잉'}</button>
          </li>
        ))}
      </Style.FollowItemList>
    </Style.Container>
  );
}

export default FollowList;
