import { useAtomValue } from 'jotai';
import Follow from '@/components/Mypage/Follow';
import useUserFollowList from '@/hooks/api/useUserFollowList';
import { userAtom } from '@/store/user';
import { FollowType } from '@/types/ResponseType';

function FollowPage() {
  const userData = useAtomValue(userAtom);

  const followings = useUserFollowList(userData.following, 'followings');
  const followers = useUserFollowList(userData.followers, 'followers');

  return (
    <>
      <Follow
        followers={
          !followers.pending && followers.data.length
            ? (followers.data as FollowType[])
            : []
        }
        followings={
          !followings.pending && followings.data.length
            ? (followings.data as FollowType[])
            : []
        }
      />
    </>
  );
}

export default FollowPage;
