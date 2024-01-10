import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { usePostCommentCreateMutation } from '@/hooks/api/usePostCommentCreateMutation';
import { useUserInfomationQuery } from '@/hooks/api/useUserInfomationQuery';
import { idAtom, tokenAtom } from '@/store/auth';
import Comment from './Comment';
import Footer from './Footer';
import Header from './Header';
import PrePost from './PrePost';
import * as Style from './index.style';

const toastStyle = {
  fontWeight: 600,
  padding: '0.75rem 1rem',
  marginTop: '0.5rem'
};

interface useFormProps {
  commentTitle: string;
  commentContent: string;
}

function PostComment() {
  const JWTtoken = useAtomValue(tokenAtom);
  const userId = useAtomValue(idAtom);

  const { postId } = useParams() as { postId: string };
  const { mutationCommentCreate } = usePostCommentCreateMutation(postId);
  const { data, isPending } = useUserInfomationQuery(userId);

  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    reset,
    setValue
  } = useForm<useFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      commentTitle: userId ? (data ? data.fullName : '') : '',
      commentContent: ''
    }
  });

  /** 댓글 작성 시 서버로 전송 */
  const onSubmit = (data: useFormProps) => {
    console.log(data);
    mutationCommentCreate({
      JWTtoken,
      title: data.commentTitle,
      comment: data.commentContent,
      postId
    });
  };

  useEffect(() => {
    setValue('commentTitle', userId ? (data ? data.fullName : '') : '');
  }, [userId, data]);

  useEffect(() => {
    if (isSubmitSuccessful) reset();

    /** react-hook-form validation */
    if (isSubmitting) {
      errors.commentTitle
        ? toast.error(errors.commentTitle.message as string)
        : null;
      errors.commentContent
        ? toast.error(errors.commentContent.message as string)
        : null;
    }
  }, [isSubmitting]);

  return (
    <>
      <Style.CommentContainer>
        <Header />
        <Style.GroudImage src="/src/assets/ShortLogo.svg" />
        <PrePost postId={postId} />
        <Comment
          register={register}
          userId={userId}
          data={data}
          isPending={isPending}
        />
        <Style.Form onSubmit={handleSubmit(onSubmit)}>
          <Footer />
        </Style.Form>
      </Style.CommentContainer>

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
