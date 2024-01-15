import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { ColorName } from '@/components/ChannelTemplate/SelectColor/type';
import Pagenation from '@/components/Common/Pagenation';
import { channelNameAtom } from '@/store/auth';
import { Post } from '@/types/ResponseType';
import { parsedPosts } from '@/utils/parse';
import { AnnounceBox, Letter, LetterContainer } from './index.style';
import { position } from './position';

interface Prop {
  posts: Post[];
  channelName: string;
  channelId: string;
}
interface FilteredPost {
  title: string;
  content: string;
  color: ColorName;
  postId: string;
}

function ChannelPosts({ posts, channelName, channelId }: Prop) {
  const [post, setPost] = useState<FilteredPost[][]>([]);
  const [page, setPage] = useState<number>(0);
  const navigator = useNavigate();

  const userName = useAtomValue(channelNameAtom);
  const isMyChannel = userName === channelName;

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
        post[page]?.map(({ title, content, color, postId }, index) => (
          <Letter
            key={`channel-letter${index}`}
            position={position[index]}
            onClick={() =>
              navigator(`/comment/${postId}`, {
                state: {
                  title,
                  color,
                  content,
                  channelName,
                  channelId
                }
              })
            }>
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
