import { useRef, useState } from 'react';
import { css } from '@emotion/react';
import FollowList from '../FollowList';
import * as Style from './index.style';

function Follow() {
  const [selected, setSelected] = useState('follower');
  const scrollRef = useRef<HTMLDivElement>(null);

  const followListData1 = [
    { image: '', name: '테스트1' },
    { image: '', name: '테스트2' },
    { image: '', name: '테스트3' }
  ];

  const handleFollowTypeClick = (type: string) => {
    if (selected === type) return;
    setSelected(type === 'follower' ? 'follower' : 'following');

    const width = scrollRef.current?.getClientRects()[0].width;

    if (scrollRef && scrollRef.current) {
      const move = selected === 'following' ? -width! : width!;
      scrollRef.current.scrollBy({ left: move, top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Style.Container>
      <div className="follow-title-wrap">
        <span
          css={css`
            color: ${selected === 'follower' ? 'black' : '#d2d2d2'};
          `}
          onClick={() => handleFollowTypeClick('follower')}
        >
          팔로워
        </span>
        <span
          css={css`
            color: ${selected === 'following' ? 'black' : '#d2d2d2'};
          `}
          onClick={() => handleFollowTypeClick('following')}
        >
          팔로잉
        </span>
      </div>
      <Style.UnderLine className={selected === 'following' ? 'active' : ''} />
      <div
        ref={scrollRef}
        css={css`
          overflow-x: hidden;
        `}
      >
        <div className="follow-list-container">
          <FollowList
            type="follower"
            followList={followListData1}
          />
          <FollowList
            type="following"
            followList={followListData1}
          />
        </div>
      </div>
    </Style.Container>
  );
}

export default Follow;
