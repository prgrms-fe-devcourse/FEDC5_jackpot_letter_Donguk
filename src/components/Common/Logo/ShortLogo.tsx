import { theme } from '@/theme';
import { DarkModeProps } from './LongLogo';

function ShortLogo({ darkMode }: DarkModeProps) {
  return (
    <svg
      width="40"
      height="130"
      viewBox="0 0 40 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="20.5688"
        y1="-0.00495334"
        x2="21.5001"
        y2="93.995"
        stroke={darkMode ? theme.palette.sub : theme.palette.dark}
      />
      <circle
        cx="20"
        cy="109"
        r="20"
        fill={darkMode ? theme.palette.sub : theme.palette.dark}
      />
      <path
        d="M29.5794 89.5671C12.3799 110.333 25.7095 128.488 23.621 128.645"
        stroke={darkMode ? theme.palette.dark : theme.palette.sub}
      />
    </svg>
  );
}

export default ShortLogo;
