import { useState } from 'react';
import useCreateFollow from '@/hooks/api/useCreateFollow';
import useDeleteFollow from '@/hooks/api/useDeleteFollow';
import { theme } from '@/theme';
import ProfileImg from '../ProfileImg';
import * as Style from './index.style';

interface FollowListItemProps {
  _id: string;
  image?: string;
  name: string;
  type: string;
}

function FollowListItem({ _id, image, name, type }: FollowListItemProps) {
  const [color, setColor] = useState('#d9d9d9');

  const { mutate: deleteMutate } = useDeleteFollow();
  const { mutate: createMutate } = useCreateFollow();

  const handleButtonClick = () => {
    if (color === '#d9d9d9') {
      setColor(theme.palette.main);
      deleteMutate(_id);
    } else {
      setColor('#d9d9d9');
      createMutate(_id);
    }
  };
  return (
    <>
      <li className="follow-item">
        <ProfileImg
          image={image ?? ''}
          alt="user profile image"
          width={2.5}
          height={2.5}
        />
        <span>{name}</span>
        <Style.FollowBtn
          color={color}
          onClick={() => (type === 'following' ? handleButtonClick() : null)}
        >
          {type === 'follower'
            ? '삭제'
            : color === '#d9d9d9'
              ? '팔로잉'
              : '팔로우'}
        </Style.FollowBtn>
      </li>
    </>
  );
}

export default FollowListItem;
