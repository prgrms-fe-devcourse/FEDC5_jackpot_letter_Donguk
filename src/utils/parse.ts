import { BgType } from '@/components/ChannelTemplate/SelectBackground/type';
import {
  ColorName,
  ColorType
} from '@/components/ChannelTemplate/SelectColor/type';
import { Post } from '@/types/ResponseType';

export const parsedDescription = (description: string) => {
  try {
    return { ...JSON.parse(description) };
  } catch (e) {
    return undefined;
  }
};

export const parsedColor = (description: string) => {
  const parsedColor: ColorName = parsedDescription(description)?.color;
  if (!parsedColor || typeof parsedColor === 'number') return ColorType.orange;
  return ColorType[parsedColor];
};

export const parsedBackground = (description: string) => {
  return parsedDescription(description)?.background ?? BgType.original;
};

export const parsedPosts = (posts: Post[]) => {
  return posts?.map((post) => {
    const postInfo = parsedDescription(post.title);
    return { ...postInfo, postId: post._id };
  });
};

export const getImageUrl = (name: string) => {
  const url = `../assets/images/background/${name}.png`;
  const parsedUrl = new URL(url, import.meta.url).href;
  const url2 = `/assets/images/background/${name}.png`;
  console.log(parsedUrl);
  const parsedUrl2 = new URL(url2, import.meta.url).href;
  console.log(parsedUrl, parsedUrl2);
  return parsedUrl2;
};
