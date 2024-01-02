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
