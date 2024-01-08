import { BgName } from '@/components/ChannelTemplate/SelectBackground/type';
import { ColorName } from './../components/ChannelTemplate/SelectColor/type';

export interface ChannelOptionType {
  background: BgName;
  color: ColorName;
  allowViewAll: boolean;
  allowWriteAll: boolean;
}
