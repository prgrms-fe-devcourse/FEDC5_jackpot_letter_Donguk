import { useEffect } from 'react';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import reset from '@/styles/_reset';
import { theme } from '@/theme';
import { Global, ThemeProvider } from '@emotion/react';
import Comment from './Comment';
import Footer from './Footer';
import Header from './Header';
import PrePost from './PrePost';
import * as Style from './index.style';

interface useFormProps {
  commentContent: string;
}

function PostComment() {
  const toastStyle = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem'
  };

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<useFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      commentContent: ''
    }
  });

  const onSubmit = (data: SubmitErrorHandler<useFormProps>) => {
    console.log('전송 된 데이터', data);
  };

  useEffect(() => {
    if (isSubmitting)
      errors.commentContent
        ? toast.error(errors.commentContent.message as string)
        : null;
  }, [isSubmitting]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <Style.CommentContainer>
          <Header />
          <Style.GroudImage src="/src/assets/ShortLogo.svg" />
          <PrePost />
          <Comment register={register} />
          <Style.Form onSubmit={handleSubmit(onSubmit)}>
            <Footer />
          </Style.Form>
        </Style.CommentContainer>
      </ThemeProvider>
      <Toaster
        toastOptions={{
          style: toastStyle,
          duration: 1000
        }}
      />
    </>
  );
}

export default PostComment;
