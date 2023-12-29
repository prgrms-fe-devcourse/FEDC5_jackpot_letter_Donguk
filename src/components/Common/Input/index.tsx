import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { InputContainer, Label, StyledInput } from './index.style';

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
    <InputContainer>
      <Label>{label}</Label>
      <StyledInput
        width={width}
        height={height}
        color={color}
        {...register(value, { required })}
        type={type}
      />
    </InputContainer>
  );
}

export default Input;
