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

const MAX_FILE_SIZE = 500000;

export const ImageSchema = z.object({
  image: z.instanceof(FileList).refine(
    (fileList) => {
      const file = fileList[0];
      return !file || file.size <= MAX_FILE_SIZE;
    },
    { message: '5MB 이하 파일만 등록할 수 있습니다.' }
  )
});

export const NameSchema = z.object({
  name: z.string().refine(
    (name) => {
      return !name || (name.length >= 2 && name.length <= 15);
    },
    {
      message: '이름은 2자 이상 16자 이하로 입력해주세요'
    }
  )
});
