import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import useChannelListQuery from '@/hooks/api/useChannelListQuery';
import { useGetPostDetailQuery } from '@/hooks/api/useGetPostDetailQuery';
import { usePostCreateMutation } from '@/hooks/api/usePostCreateMutation';
import { tokenAtom } from '@/store/auth';
import reset from '@/styles/_reset';
import { theme } from '@/theme';
import { Global, ThemeProvider } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';
import Letter from './Letter';
import Warning from './Warning';
import * as Style from './index.style';

const toastStyle = {
  fontWeight: 600,
  padding: '0.75rem 1rem',
  marginTop: '0.5rem'
};

export interface useFormProps {
  letterTitle: string;
  letterComment: string;
}

function Post() {
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
  const JWTtoken = useAtomValue(tokenAtom);
  const { channelId } = useParams();
  const { mutationPostCreate } = usePostCreateMutation();

  /** 채널 리스트 */
  const { data: channelListData } = useChannelListQuery();
  console.log(channelListData);

  /** 포스트 작성 시 서버로 전송 */
  const onSubmit = (submitData: useFormProps) => {
    if (channelId)
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
