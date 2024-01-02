import { SyntheticEvent } from 'react';
import { css } from '@emotion/react';
import { ProfilePhoto } from './index.style';
import empty_user from '@/assets/images/empty_user.png';

interface ProfileImgProps {
  image: string;
  alt: string;
  width: number;
  height: number;
}

function ProfileImg({ image, width, height, alt }: ProfileImgProps) {
  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    // 임시 빈 이미지
    e.currentTarget.src = empty_user;
  };

  return (
    <ProfilePhoto
      css={css`
        height: ${height}rem;
        width: ${width}rem;
      `}
      src={image}
      alt={alt}
      onError={(e: SyntheticEvent<HTMLImageElement, Event>) =>
        handleImgError(e)
      }
    />
  );
}

export default ProfileImg;
