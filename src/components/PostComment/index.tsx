import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { usePostCommentCreateMutation } from '@/hooks/api/usePostCommentCreateMutation';
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

  const JWTtoken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1OGViZjczZmIxZmIyNmE0MmNiYWZkNyIsImVtYWlsIjoiY2hsZGxyOThAbmF2ZXIuY29tIn0sImlhdCI6MTcwNDM0MzY3MH0.PtVWcjYkg8BxscGRFVp3aGLCP7xDNZOdkeBClrCQoho';

  const { mutationCommentCreate } = usePostCommentCreateMutation();

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

  const onSubmit = (data: useFormProps) => {
    console.log('최종 데이터', data);

    mutationCommentCreate({
      JWTtoken,
      comment: data.commentContent,
      postId: '6596a8c47bff35223a55215d'
    });
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
