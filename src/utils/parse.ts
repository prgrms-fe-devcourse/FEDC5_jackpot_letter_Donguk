import { BgType } from '@/components/ChannelTemplate/SelectBackground/type';
import { ColorType } from '@/components/ChannelTemplate/SelectColor/type';

const parsedDescription = (description: string) => {
  try {
    return JSON.parse(description);
  } catch (e) {
    return undefined;
  }
};

export const parsedColor = (description: string) => {
  const parsedColor = parsedDescription(description)?.color;

  if (!parsedColor || typeof parsedColor === 'number') return ColorType.orange;
  return parsedColor;
};
export const parsedBackground = (description: string) => {
  return parsedDescription(description)?.background ?? BgType.original;
};
