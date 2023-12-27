import { Path, UseFormRegister } from 'react-hook-form';
import styled from '@emotion/styled';

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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0;
`;
const Label = styled.label`
  padding-bottom: 0.3rem;
  font-size: 0.75rem;
  color: #0f172a;
`;
const StyledInput = styled.input`
  width: 15rem;
  height: 2.2rem;
  padding: 0 1.25rem;
  border: 0.9px solid #9f9f9f;
  border-radius: 3px;
`;
