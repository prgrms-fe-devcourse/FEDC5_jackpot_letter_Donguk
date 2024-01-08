import { z } from 'zod';
import { REGEX } from '@/constants/regex';

export const passwordRegex = new RegExp(REGEX.PASSWORD);
export const SingInSchema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요!' })
    .email('올바른 이메일 형식이 아닙니다.'),
  password: z
    .string()
    .min(1, { message: '영문,숫자를 조합하여 입력해주세요! (8-15자)' })
    .regex(passwordRegex, '영문,숫자를 조합하여 입력해주세요! (8-15자)')
});

export const SignUpSchema = z.object({
  fullName: z.string().min(2, { message: '이름을 입력해주세요!' }),
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요!' })
    .email('올바른 이메일 형식이 아닙니다.'),
  password: z
    .string()
    .regex(passwordRegex, '영문,숫자를 조합하여 입력해주세요! (8-15자)')
});

export const PasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, '비밀번호를 입력해주세요.')
      .regex(passwordRegex, '영문,숫자를 조합하여 입력해주세요! (8-15자)'),
    passwordCheck: z.string().min(1, '비밀번호를 다시 입력해주세요.')
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ['passwordCheck'],
    message: '비밀번호가 일치하지 않습니다.'
  });
