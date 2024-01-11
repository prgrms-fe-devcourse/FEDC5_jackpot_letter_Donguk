import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ColorName } from '@/components/ChannelTemplate/SelectColor/type';
import Pagenation from '@/components/Common/Pagenation';
import { PATH } from '@/constants/path';
import { Post } from '@/types/ResponseType';
import { parsedPosts } from '@/utils/parse';
import { Letter, LetterContainer } from './index.style';
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
            position={position[index]}>
            <Link to={`${PATH.COMMENT}/${postId}`}>
              <img src={`/src/assets/letter/${color}.png`} />
              <span>{title}</span>
            </Link>
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
