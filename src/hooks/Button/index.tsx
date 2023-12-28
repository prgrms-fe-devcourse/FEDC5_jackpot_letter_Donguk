import { ButtonStyle } from './index.style';
interface ButtonProps {
  content: string;
  type?: string;
  size?: string;
  onClick?: () => void;
  disabled?: boolean;
  styleOption?: object;
  key?: string;
}

function Button(props: ButtonProps) {
  const { size = 'xl', type = 'primary', onClick, content, key } = props;

  return (
    <ButtonStyle
      buttonType={type}
      size={size}
      key={key}
      onClick={onClick}>
      {content}
    </ButtonStyle>
  );
}

export default Button;
