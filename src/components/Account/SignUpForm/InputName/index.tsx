import { FieldValues, Path } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Button from '@/components/Common/Button';
import Input from '@/components/Common/Input';
import Description from '../../Description';
import { FormInputProps } from '../../FormInput';
import { Container } from './index.style';

interface InputNameProps<T extends FieldValues> extends FormInputProps<T> {
  handleCheckForDuplicates: () => void;
}

function InputName<T extends FieldValues>({
  errors,
  register,
  handleCheckForDuplicates
}: InputNameProps<T>) {
  return (
    <>
      <Container>
        <Input
          width="9.5rem"
          label="이름(채널)"
          value={'fullName' as Path<T>}
          type="text"
          height="2.47rem"
          color={errors.fullName && 'error'}
          register={register}
          required
        />
        <Button
          content="중복 확인"
          type="button"
          onClick={handleCheckForDuplicates}
          styleOption={{
            height: '2.47rem',
            width: '7.5rem'
          }}
        />
      </Container>
      <Description text=" 현재 설정한 이름은 채널명으로 사용됩니다 :)" />
      <ErrorMessage
        errors={errors}
        name="fullName"
        render={({ message }) => (
          <Description
            color="error"
            text={message}
          />
        )}
      />
    </>
  );
}

export default InputName;
