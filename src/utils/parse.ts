import { BgType } from '@/components/ChannelTemplate/SelectBackground/type';
import {
  ColorName,
  ColorType
} from '@/components/ChannelTemplate/SelectColor/type';
import { Post } from '@/types/ResponseType';

const parsedDescription = (description: string, postId: strig) => {
  try {
    return { ...JSON.parse(description), postId };
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
  return posts?.map((post) => parsedDescription(post.title, post._id));
};
