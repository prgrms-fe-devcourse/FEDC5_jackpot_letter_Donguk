import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import * as Style from './index.style';

interface InputProps<T extends FieldValues> {
  width?: string;
  height?: string;
  color?: string;
  type: string;
  label: string;
  value: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
}

function Input<T extends FieldValues>({
  width = '15rem',
  height = '2.2rem',
  type = 'text',
  color = '',
  label,
  value,
  register,
  required
}: InputProps<T>) {
  return (
    <Style.InputContainer>
      <Style.Label>{label}</Style.Label>
      <Style.StyledInput
        width={width}
        height={height}
        color={color}
        {...register(value, { required })}
        type={type}
      />
    </Style.InputContainer>
  );
}

export default Input;
