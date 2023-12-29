import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { InputContainer, Label, StyledInput } from './index.style';

interface InputProps<T extends FieldValues> {
  type: string;
  label: string;
  value: Path<T>;
  register: UseFormRegister<T>;
  required: boolean;
}

function Input<T extends FieldValues>({
  type,
  label,
  value,
  register,
  required
}: InputProps<T>) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <StyledInput
        {...register(value, { required })}
        type={type}
      />
    </InputContainer>
  );
}

export default Input;
