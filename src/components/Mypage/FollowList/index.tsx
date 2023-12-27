import ProfileImg from '../ProfileImg';
import { Container, FollowItemList } from './index.style';

interface FollowListProps {
  type: 'follower' | 'following';
  followList: followType[];
}

type followType = {
  image: string;
  name: string;
};

function FollowList({ type, followList }: FollowListProps) {
  return (
    <Container>
      <FollowItemList>
        {followList.map(({ image, name }) => (
          <li
            className="follow-item"
            key={name}>
            <ProfileImg
              image={image}
              alt="user profile image"
              width={2.5}
              height={2.5}
            />
            <span>{name}</span>
            <button>{type === 'follower' ? '삭제' : '팔로잉'}</button>
          </li>
        ))}
      </FollowItemList>
    </Container>
  );
}

export default FollowList;
