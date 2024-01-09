import React from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Input from '@/components/Common/Input';
import { ACCOUNT_DATA } from '@/constants/account';
import Description from '../Description';

type InputValue = 'email' | 'password';

export interface FormInputProps<T extends FieldValues> {
  errors: FieldErrors;
  register: UseFormRegister<T>;
}

function FormInput<T extends FieldValues>({
  errors,
  register
}: FormInputProps<T>) {
  return (
    <>
      {ACCOUNT_DATA.map((data) => {
        const { id, label, value, type } = data;
        return (
          <React.Fragment key={id}>
            <Input
              label={label}
              value={value as Path<T>}
              type={type}
              height="2.47rem"
              width="17.5rem"
              color={errors[value] && 'error'}
              register={register}
              required
            />
            <ErrorMessage
              errors={errors}
              name={value as InputValue}
              render={({ message }) => (
                <Description
                  color="error"
                  text={message}
                />
              )}
            />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default FormInput;
