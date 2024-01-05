import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { usePostCreateMutation } from '@/hooks/api/usePostCreateMutation';
import reset from '@/styles/_reset';
import { theme } from '@/theme';
import { Global, ThemeProvider } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';
import Letter from './Letter';
import Warning from './Warning';
import * as Style from './index.style';

export interface useFormProps {
  letterTitle: string;
  letterComment: string;
}

/**
 * 포스트 페이지로 온다는 건, 웹 스토리지에 jwt 토큰이 존재해야하고, channelId를 넘겨받아야 한다.
 * jwt 토큰과 channelId로 특정 채널에 포스트를 작성할 수 있기 떄문.
 * jwt 토큰은 스토리지 확인, channelId는 라우팅 시에 넘겨 받으면 좋을 것 같음
 * 포스트 작성후 onSubmit 동작 -> mutationPostCreate
 */
function Post() {
  const toastStyle = {
    fontWeight: 600,
    padding: '0.75rem 1rem',
    marginTop: '0.5rem'
  };

  /** 임시 JWT토큰 */
  const JWTtoken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1OGViZjczZmIxZmIyNmE0MmNiYWZkNyIsImVtYWlsIjoiY2hsZGxyOThAbmF2ZXIuY29tIn0sImlhdCI6MTcwNDM0MzY3MH0.PtVWcjYkg8BxscGRFVp3aGLCP7xDNZOdkeBClrCQoho';

  /** 채널 리스트 */
  // const { data, isPending, error } = useGetChannelQuery();
  // console.log(data);

  /** 특정 포스트 상세 보기*/
  // const { data: detailData } = useGetPostDetailQuery(
  //   '6596a8c47bff35223a55215d'
  // );

  const { mutationPostCreate } = usePostCreateMutation();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<useFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      letterTitle: '',
      letterComment: ''
    }
  });

  const onSubmit = (submitData: useFormProps) => {
    console.log('최종 데이터:', submitData);

    /** 라우팅 시에 넘겨 받으면 좋을 것 같음 */
    const channelId = '';

    /** 포스트 작성 시 서버로 전송 */
    mutationPostCreate({
      JWTtoken,
      title: submitData.letterTitle,
      content: submitData.letterComment,
      image: null,
      channelId
    });
  };

  useEffect(() => {
    /** react-hook-form validation */
    if (isSubmitting) {
      errors.letterComment
        ? toast.error(errors.letterComment.message as string)
        : null;
      errors.letterTitle
        ? toast.error(errors.letterTitle.message as string)
        : null;
    }
  }, [isSubmitting]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <Style.PostContainer>
          <Header />
          <Style.GroudImage src="/src/assets/ShortLogo.svg" />
          <Letter register={register} />
          <Warning />
          <Style.Form onSubmit={handleSubmit(onSubmit)}>
            <Footer />
          </Style.Form>
        </Style.PostContainer>
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

export default Post;
