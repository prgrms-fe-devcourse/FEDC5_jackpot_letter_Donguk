import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { ColorName } from '@/components/ChannelTemplate/SelectColor/type';
import Pagenation from '@/components/Common/Pagenation';
import { PATH } from '@/constants/path';
import { channelNameAtom } from '@/store/auth';
import { Post } from '@/types/ResponseType';
import { parsedPosts } from '@/utils/parse';
import { AnnounceBox, Letter, LetterContainer } from './index.style';
import { position } from './position';

interface Prop {
  posts: Post[];
}
interface FilteredPost {
  title: string;
  content: string;
  color: ColorName;
  postId: string;
}

function ChannelPosts({ posts }: Prop) {
  const [post, setPost] = useState<FilteredPost[][]>([]);
  const [page, setPage] = useState<number>(0);

  const userName = useAtomValue(channelNameAtom);
  const { channelName } = useParams();
  const isMyChannel = userName === channelName;
  const navigate = useNavigate();

  useEffect(() => {
    const channelPosts: FilteredPost[] = parsedPosts(posts);
    const pagesPost = Array.from(
      { length: Math.ceil(channelPosts?.length / 6) },
      (_, index) => channelPosts?.slice(index * 6, index * 6 + 6)
    );
    setPost(pagesPost);
  }, [posts]);

  return (
    <LetterContainer>
      {post &&
        post[page]?.map(({ title, color, postId }, index) => (
          <Letter
            key={`channel-letter${index}`}
            onClick={() => navigate(`${PATH.COMMENT}/${postId}`)}
            position={position[index]}>
            <img src={`/src/assets/letter/${color}.png`} />
            <span>{title}</span>
          </Letter>
        ))}
      <AnnounceBox visible={post?.length === 0}>
        아직 편지가없어요. <br />
        {isMyChannel
          ? '친구들에게 링크를 공유해보세요'
          : '처음으로 편지를 남겨주세요'}
      </AnnounceBox>
      <Pagenation
        totalPage={post?.length}
        setPage={setPage}
      />
    </LetterContainer>
  );
}

export default ChannelPosts;
