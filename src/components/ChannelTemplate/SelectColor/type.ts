export type ColorWithValue = {
  [key in ColorName]: string;
};

export type ColorName =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'mint'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'white';

export const ColorType: ColorWithValue = {
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
