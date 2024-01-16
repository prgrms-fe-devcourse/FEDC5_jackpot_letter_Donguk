import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { ColorName } from '@/components/ChannelTemplate/SelectColor/type';
import Pagenation from '@/components/Common/Pagenation';
import { channelNameAtom } from '@/store/auth';
import { Post } from '@/types/ResponseType';
import { parsedDescription, parsedPosts } from '@/utils/parse';
import { AnnounceBox, Letter, LetterContainer } from './index.style';
import { positions } from './position';

interface Prop {
  posts: Post[] | undefined;
  channelName: string;
  channelId: string;
  channelDescription: string;
}
interface FilteredPost {
  title: string;
  content: string;
  color: ColorName;
  postId: string;
}

function ChannelPosts({
  posts,
  channelName,
  channelId,
  channelDescription
}: Prop) {
  const [post, setPost] = useState<FilteredPost[][]>([]);
  const [page, setPage] = useState<number>(0);
  const navigator = useNavigate();

  const userName = useAtomValue(channelNameAtom);
  const isMyChannel = userName === channelName;
  const { allowViewAll } = parsedDescription(channelDescription);

  useEffect(() => {
    if (posts) {
      const channelPosts: FilteredPost[] = parsedPosts(posts);
      const pagesPost = Array.from(
        { length: Math.ceil(channelPosts?.length / 6) },
        (_, index) => channelPosts?.slice(index * 6, index * 6 + 6)
      );
      setPost(pagesPost);
    }
  }, [posts]);

  const handleClickLetter = (post: FilteredPost) => {
    if (!allowViewAll)
      return toast.error('편지 공개를 허용하지않은 채널이에요.');

    const { title, content, color, postId } = post;
    const letterState = {
      title,
      color,
      content,
      channelName,
      channelId
    };

    navigator(`/comment/${postId}`, {
      state: letterState
    });
  };

  return (
    <LetterContainer>
      {post &&
        post[page]?.map((post, index) => (
          <Letter
            key={`channel-letter${index}`}
            position={positions[index]}
            onClick={() => handleClickLetter(post)}>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}/images/letter/${
                post.color
              }.png`}
            />
            <span>{post.title}</span>
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
