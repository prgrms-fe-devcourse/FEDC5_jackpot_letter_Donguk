import { useAtomValue } from 'jotai';
import Follow from '@/components/Mypage/Follow';
import useUserFollowList from '@/hooks/api/useUserFollowList';
import { userAtom } from '@/store/user';

function FollowPage() {
  const userData = useAtomValue(userAtom);

  const { data: followings } = useUserFollowList(
    userData.following,
    'followings'
  );
  const { data: followers } = useUserFollowList(
    userData.followers,
    'followers'
  );

  return (
    <>
      <Follow
        followers={followers}
        followings={followings}
      />
    </>
  );
}

export default FollowPage;
