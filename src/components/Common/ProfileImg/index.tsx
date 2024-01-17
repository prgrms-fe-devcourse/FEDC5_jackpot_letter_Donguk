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
  if (userId) {
    return (
      <ProfilePhoto
        id="profile-img"
        ref={ref}
        css={css`
          height: ${height}rem;
          width: ${width}rem;
        `}
        src={image || empty_user}
        alt={alt}
        cursor="pointer"
        onError={(e: SyntheticEvent<HTMLImageElement, Event>) =>
          handleImgError(e)
        }
        onClick={() => navigate(`/user/${userId}`)}
      />
    );
  } else {
    return (
      <ProfilePhoto
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
      />
    );
  }
}

const ForwardRefProfileImg = forwardRef<HTMLImageElement, ProfileImgProps>(
  ProfileImg
);

export default ForwardRefProfileImg;
