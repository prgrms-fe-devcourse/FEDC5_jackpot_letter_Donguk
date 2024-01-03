export type IconColorType = {
  [key in colorType]: string;
};

type colorType =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'mint'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'white';

export const IconColor: IconColorType = {
  red: '#FCA5A5',
  orange: '#FDBA74',
  yellow: '#FDE047',
  green: '#BEF264',
  mint: '#6EE7B7',
  blue: '#67E8F9',
  purple: '#C4B5FD',
  pink: '#F0ABFC',
  white: '#FBF7F3'
};
