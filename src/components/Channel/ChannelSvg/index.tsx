export const channelSvg = (color: string): JSX.Element => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="40"
        cy="40"
        r="40"
        fill={color}
      />
      <path
        d="M51.1588 1.10596C16.7599 42.6385 43.419 78.948 39.242 79.2626"
        stroke="#435585"
      />
    </svg>
  );
};
