import Follow from '@/components/Mypage/Follow';

function FollowPage() {
  const followListData = [
    { _id: '1', image: '', user: '테스트1' },
    { _id: '2', image: '', user: '테스트2' },
    { _id: '3', image: '', user: '테스트3' },
    { _id: '4', image: '', user: '테스트1' },
    { _id: '5', image: '', user: '테스트2' },
    { _id: '6', image: '', user: '테스트3' },
    { _id: '7', image: '', user: '테스트1' },
    { _id: '8', image: '', user: '테스트2' },
    { _id: '9', image: '', user: '테스트3' },
    { _id: '10', image: '', user: '테스트1' },
    { _id: '11', image: '', user: '테스트2' },
    { _id: '12', image: '', user: '테스트3' }
  ];

  return (
    <>
      <Follow
        followers={followListData}
        followings={followListData}
      />
    </>
  );
}

export default FollowPage;
