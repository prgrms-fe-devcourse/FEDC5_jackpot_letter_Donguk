import {
  IconColor,
  colorType
} from '@/components/ChannelTemplate/SelectColor/type';

const parsedDescription = (description: string) => {
  let result;
  if (description && description.split('')[1] === '"') {
    result = JSON.parse(description);
  }
  return result;
};
export const parsedColor = (description: string) => {
  const color = parsedDescription(description)?.color;
  const parsedString = Object.keys(IconColor)[color ?? 0] as colorType;
  return IconColor[`${parsedString}`];
};
export const parsedBackground = (description: string) => {
  return parsedDescription(description)?.background ?? 0;
};
