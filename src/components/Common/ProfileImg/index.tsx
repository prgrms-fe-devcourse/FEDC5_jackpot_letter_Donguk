import { ForwardedRef, SyntheticEvent, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import empty_user from '@/assets/images/empty_user.png';
import { css } from '@emotion/react';
import { ProfilePhoto } from './index.style';

interface ProfileImgProps {
  image?: string;
  alt: string;
  width: number;
  height: number;
  userId?: string;
}

function ProfileImg(
  { image, width, height, alt, userId }: ProfileImgProps,
  ref: ForwardedRef<HTMLImageElement>
) {
  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    // 임시 빈 이미지
    e.currentTarget.src = empty_user;
  };

  const navigate = useNavigate();

  return (
    <ProfilePhoto
      id="profile"
      ref={ref}
      css={css`
        height: ${height}rem;
        width: ${width}rem;
      `}
      src={image || empty_user}
      alt={alt}
      onError={(e: SyntheticEvent<HTMLImageElement, Event>) =>
        handleImgError(e)
      }
      onClick={() => (userId ? navigate(`/user/${userId}`) : null)}
    />
  );
}

const ForwardRefProfileImg = forwardRef<HTMLImageElement, ProfileImgProps>(
  ProfileImg
);

export default ForwardRefProfileImg;
