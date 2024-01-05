export type IconColorType = {
  [key in BackgroundType]: {
    mode: 'dark' | 'white';
  };
};

export type BackgroundType =
  | 'mountain'
  | 'mountain2'
  | 'mountain3'
  | 'gradation'
  | 'see'
  | 'paper'
  | 'paper2'
  | 'per'
  | 'original';

export const BackgroundColor: BackgroundType = {
  mountain: {
    mode: 'light'
  },
  mountain2: {
    mode: 'light'
  },
  mountain3: {
    mode: 'dark'
  },
  gradation: {
    mode: 'light'
  },
  see: {
    mode: 'dark'
  },
  paper: {
    mode: 'light'
  },
  paper2: {
    mode: 'light'
  },
  per: {
    mode: 'dark'
  },
  original: {
    mode: 'dark'
  }
};
