export const BtnSize = {
  xl: {
    width: '90%',
    height: '3.5rem'
  },
  lg: {
    width: '70%',
    height: '3.5rem'
  },
  md: {
    width: '40%',
    height: '3.5rem'
  },
  sm: {
    width: '20%',
    height: '3.5rem'
  },
  xs: {
    width: '20%',
    height: '2.4rem'
  }
};
export type SortName =
  | 'primary'
  | 'outlined'
  | 'assistant'
  | 'secondary'
  | 'tertiary';
export type SizeName = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export const BtnSort = {
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
