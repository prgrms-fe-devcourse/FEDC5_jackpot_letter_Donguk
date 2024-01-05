export type BgwithMode = {
  [key in BgName]: 'dark' | 'light';
};

export type BgName =
  | 'mountain'
  | 'mountain2'
  | 'mountain3'
  | 'gradation'
  | 'see'
  | 'paper'
  | 'paper2'
  | 'per'
  | 'original';

export const BgType: BgwithMode = {
  mountain: 'light',
  mountain2: 'light',
  mountain3: 'dark',
  gradation: 'light',
  see: 'dark',
  paper: 'light',
  paper2: 'light',
  per: 'dark',
  original: 'dark'
};
