import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from '@/components/Common/Button';
import ProfileImg from '@/components/Common/ProfileImg';
import { FollowBtn } from '@/components/Mypage/FollowListItem/index.style';
import { FollowWrapper } from '@/components/Mypage/Sidebar/index.style';
import useCreateFollow from '@/hooks/api/useCreateFollow';
import useDeleteFollow from '@/hooks/api/useDeleteFollow';
import useGetChannelInfo from '@/hooks/api/useGetChannelInfo';
import useUser from '@/hooks/api/useUser';
import { ACCESS_USER_ID } from '@/constants/api';
import { theme } from '@/theme';
import { getStorage } from '@/utils/LocalStorage';
import * as Style from './index.style';

function UserPage() {
  const [color, setColor] = useState(theme.palette.main);
  const myUserId = getStorage(ACCESS_USER_ID, '');
  const { userId } = useParams();

  const navigate = useNavigate();

  const { data: myUserData } = useUser(myUserId);
  const { data: userData } = useUser(userId!);
  const { data: channel } = useGetChannelInfo(userData?.fullName ?? '');

  const { mutate: deleteMutate } = useDeleteFollow();
  const { mutate: createMutate } = useCreateFollow();

  const follow = myUserData?.following.find((e) => e.user === userData?._id);

  useEffect(() => {
    if (userData && follow) {
      setColor('#d9d9d9');
    } else {
      setColor(theme.palette.main);
    }
  }, [follow, userData]);

  const handleFollowClick = () => {
    if (userData && follow) {
      if (userData?._id && follow) {
        deleteMutate(follow?._id);
      }
    } else {
      if (userData?._id) {
        createMutate(userData._id);
      }
    }
  };

  const handleMessageClick = () => {
    // 임시 url
    navigate('/message');
  };

  const handleGoButtonClick = () => {
    if (channel) {
      navigate(`/channel/${userData?.fullName}`);
    } else {
      toast.error(`${userData?.fullName}님의 박은 아직 생성되지 않았습니다.`);
    }
  };

  return (
    <Style.Container>
      <Style.UserImgWrap>
        <div className="profile-img-wrap">
          <ProfileImg
            image={userData?.image || ''}
            width={8}
            height={8}
            alt="user profile image"
          />
        </div>
        <Style.ProfileCover url={userData?.coverImage || ''} />
      </Style.UserImgWrap>
      <Style.Section>
        <Style.TextInfoWrap>
          <span className="user-name">{userData?.fullName}</span>
          <FollowWrapper size={theme.typography.mypage_regular.fontSize}>
            <span className="follow followers">
              팔로워 {userData?.followers.length}
            </span>
            <span className="follow following">
              팔로잉 {userData?.following.length}
            </span>
          </FollowWrapper>
        </Style.TextInfoWrap>
        <div className="follow-btn-wrap">
          <FollowBtn
            width="40vw"
            height="2.5rem"
            color={color}
            onClick={handleFollowClick}
          >
            {color === '#d9d9d9' ? '팔로잉' : '팔로우'}
          </FollowBtn>
          <FollowBtn
            width="40vw"
            height="2.5rem"
            onClick={handleMessageClick}
          >
            메시지
          </FollowBtn>
        </div>
        <div className="go-btn-wrap">
          <Button
            onClick={handleGoButtonClick}
            content="박 보러가기"
            styleOption={{
              width: '100%',
              fontSize: theme.typography.mypage_regular.fontSize
            }}
          />
        </div>
      </Style.Section>
    </Style.Container>
  );
}

export default UserPage;
