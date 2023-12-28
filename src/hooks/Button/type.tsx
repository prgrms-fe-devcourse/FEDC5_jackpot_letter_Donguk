interface buttonSortType {
  backgroundColor: string;
  color: string;
  fontWeight?: number;
  border?: string;
  boxShadow?: string;
}
interface buttonSizeType {
  width: string;
  height: string;
}

export const buttonSize: { [key: string]: buttonSizeType } = {
  xl: {
    width: '19.375rem',
    height: '3.5rem'
  },
  lg: {
    width: '12.7rem',
    height: '3.5rem'
  },
  md: {
    width: '9.375rem',
    height: '3.5rem'
  },
  sm: {
    width: '5.125rem',
    height: '3.5rem'
  },
  xs: {
    width: '5.125rem',
    height: '2.4rem'
  }
};

export const buttonTypes: { [key: string]: buttonSortType } = {
  primary: {
    backgroundColor: '#0EB29A',
    color: '#ffffff'
  },
  outlined: {
    backgroundColor: 'transparent',
    color: '#8C999A',
    border: '1px solid #8C999A'
  },
  assistant: {
    backgroundColor: '#D9D9D9',
    color: '#000000',
    fontWeight: 500
  },
  secondary: {
    backgroundColor: '#ffffff',
    color: '#8C999A',
    boxShadow: '4px 4px 4px #8C999A'
  },
  tertiary: {
    backgroundColor: '#8C999A',
    color: '#ffffff'
  }
};
