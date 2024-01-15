import { ButtonStyle } from './index.style';
import { SizeName, SortName } from './type';

interface ButtonProps {
  content: string;
  onClick?: () => void;
  disabled?: boolean;
  styleOption?: { [key: string]: string };
  type?: 'submit' | 'reset' | 'button';
  kind?: SortName;
  size?: SizeName;
}

function Button(props: ButtonProps) {
  const {
    size = 'xl',
    kind = 'primary',
    type = 'button',
    onClick,
    disabled = false,
    styleOption = {},
    content
  } = props;

  return (
    <ButtonStyle
      type={type}
      disabled={disabled}
      kind={kind}
      size={size}
      styleOption={styleOption}
      onClick={onClick}>
      {content}
    </ButtonStyle>
  );
}

export default Button;
