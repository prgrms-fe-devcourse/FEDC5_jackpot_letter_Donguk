import { theme } from '@/theme';

export interface DarkModeProps {
  darkMode: boolean;
}

function LongLogo({ darkMode }: DarkModeProps) {
  return (
    <svg
      width="40"
      height="189"
      viewBox="0 0 40 189"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="Group 2614">
        <line
          id="Line 2"
          y1="-0.5"
          x2="146.093"
          y2="-0.5"
          transform="matrix(0.00688158 0.999976 -0.999952 0.00976251 20 0)"
          stroke={darkMode ? theme.palette.sub : theme.palette.dark}
        />
        <g id="Group 4">
          <ellipse
            id="Ellipse 12"
            cx="20"
            cy="167"
            rx="20"
            ry="21"
            fill={darkMode ? theme.palette.sub : theme.palette.dark}
          />
          <path
            id="Vector 1"
            d="M29.5794 146.595C12.3799 168.4 25.7095 187.463 23.621 187.628"
            stroke={darkMode ? theme.palette.dark : theme.palette.sub}
          />
        </g>
      </g>
    </svg>
  );
}

export default LongLogo;
