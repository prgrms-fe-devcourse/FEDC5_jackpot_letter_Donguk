import { z } from 'zod';
import { REGEX } from '@/constants/regex';

export const passwordRegex = new RegExp(REGEX.PASSWORD);
export const emailRegex = new RegExp(REGEX.EMAIL);
const MESSAGE = {
  EMAIL_MESSAGE: '영문, 숫자를 조합하여 입력해주세요! (6-12자)',
  PASSWORD_MESSAGE: '영문,숫자를 조합하여 입력해주세요! (8-15자)',
  NAME_MESSAGE: '이름을 입력해주세요!'
};

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: MESSAGE.EMAIL_MESSAGE })
    .regex(emailRegex, MESSAGE.EMAIL_MESSAGE),
  password: z
    .string()
    .min(1, { message: MESSAGE.PASSWORD_MESSAGE })
    .regex(passwordRegex, MESSAGE.PASSWORD_MESSAGE)
});

export const SignUpSchema = SignInSchema.extend({
  fullName: z.string().min(2, { message: MESSAGE.NAME_MESSAGE })
});
