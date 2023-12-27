import { Path, UseFormRegister } from 'react-hook-form';
import { InputContainer, Label, StyledInput } from './index.style';

export interface FormValues {
  email: string;
  password: string;
}

interface InputProps {
  type: string;
  label: string;
  value: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  required: boolean;
}

function Input({ type, label, value, register, required }: InputProps) {
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
