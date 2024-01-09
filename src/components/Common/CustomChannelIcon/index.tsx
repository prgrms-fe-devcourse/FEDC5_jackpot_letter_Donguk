interface Prop {
  tail?: boolean;
  color: string;
  size?: number;
  opacity?: number;
}
function CustomChannelIcon({
  tail = false,
  color,
  size = 80,
  opacity = 100
}: Prop) {
  return (
    <svg
      width={size}
      opacity={`${opacity}%`}
      height={tail ? size + 100 : size}
      viewBox={tail ? '0 0 233 340' : `80 80 80 300`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      {tail && (
        <line
          x1="117.5"
          x2="117.5"
          y2="127"
          stroke={color}
        />
      )}
      <ellipse
        cx="116.5"
        cy="230.5"
        rx="116.5"
        ry="108.5"
        fill={color}
      />
      <path
        d="M149 127C48.8132 239.657 126.458 338.147 114.292 339"
        stroke="#435585"
      />
    </svg>
  );
}

export default CustomChannelIcon;
