import { ForwardedRef, SyntheticEvent, forwardRef } from 'react';
import empty_user from '@/assets/images/empty_user.png';
import { css } from '@emotion/react';
import { ProfilePhoto } from './index.style';

interface ProfileImgProps {
  image: string;
  alt: string;
  width: number;
  height: number;
}

function ProfileImg(
  { image, width, height, alt }: ProfileImgProps,
  ref: ForwardedRef<HTMLImageElement>
) {
  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    // 임시 빈 이미지
    e.currentTarget.src = empty_user;
  };

  return (
    <ProfilePhoto
      ref={ref}
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

const ForwardRefProfileImg = forwardRef<HTMLImageElement, ProfileImgProps>(
  ProfileImg
);

export default ForwardRefProfileImg;
