import { useAtomValue } from 'jotai';
import useUserFollowList from '@/hooks/api/useUserFollowList';
import { userAtom } from '@/store/user';
import FollowList from '../FollowList';

function FollowLists() {
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
      <FollowList
        type="follower"
        followList={followers}
      />
      <FollowList
        type="following"
        followList={followings}
      />
    </>
  );
}

export default FollowLists;
