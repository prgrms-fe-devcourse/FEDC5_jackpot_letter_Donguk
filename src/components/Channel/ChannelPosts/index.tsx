import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ColorName } from '@/components/ChannelTemplate/SelectColor/type';
import Pagenation from '@/components/Common/Pagenation';
import { Post } from '@/types/ResponseType';
import { parsedPosts } from '@/utils/parse';
import { Letter, LetterContainer } from './index.style';
import { position } from './position';

interface Prop {
  posts: Post[];
  channelName: string;
}
interface FilteredPost {
  title: string;
  content: string;
  color: ColorName;
  postId: string;
}

function ChannelPosts({ posts, channelName }: Prop) {
  const [post, setPost] = useState<FilteredPost[][]>([]);
  const [page, setPage] = useState<number>(0);
  const navigator = useNavigate();

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
                  channelName
                }
              })
            }>
            <img src={`/src/assets/letter/${color}.png`} />
            <span>{title}</span>
          </Letter>
        ))}
      <Pagenation
        totalPage={post?.length}
        setPage={setPage}
      />
    </LetterContainer>
  );
}

export default ChannelPosts;
