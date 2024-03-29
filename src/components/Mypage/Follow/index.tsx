import { useRef, useState } from 'react';
import { Suspense } from 'react';
import { FollowType } from '@/types/ResponseType';
import { css } from '@emotion/react';
import FollowList from '../FollowList';
import FollowSkeleton from '../FollowSkeleton';
import * as Style from './index.style';

interface FollowProps {
  followers: FollowType[];
  followings: FollowType[];
}

function Follow({ followers, followings }: FollowProps) {
  const [selected, setSelected] = useState('follower');
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <Style.Container className="container">
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
        <Suspense fallback={<FollowSkeleton />}>
          <div className="follow-list-container">
            <FollowList
              type="follower"
              followList={followers}
            />
            <FollowList
              type="following"
              followList={followings}
            />
          </div>
        </Suspense>
      </div>
    </Style.Container>
  );
}

export default Follow;
