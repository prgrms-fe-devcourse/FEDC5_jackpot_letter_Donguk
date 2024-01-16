import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import ShortLogo from '@components/Common/Logo/ShortLogo';
import { useAtomValue } from 'jotai';
import { useGetPostDetailQuery } from '@/hooks/api/useGetPostDetailQuery';
import { usePostCommentCreateMutation } from '@/hooks/api/usePostCommentCreateMutation';
import { channelNameAtom } from '@/store/auth';
import { darkAtom } from '@/store/theme';
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
  const userName = useAtomValue(channelNameAtom);
  const darkMode = useAtomValue(darkAtom);
  const { postId } = useParams() as { postId: string };
  const { data: postDetail } = useGetPostDetailQuery(postId);
  const { mutationCommentCreate } = usePostCommentCreateMutation(postId);

  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    reset,
    setValue
  } = useForm<useFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      commentTitle: userName,
      commentContent: ''
    }
  });

  /** 댓글 작성 시 서버로 전송 */
  const onSubmit = (data: useFormProps) => {
    mutationCommentCreate({
      title: data.commentTitle,
      comment: data.commentContent,
      postId
    });
  };

  useEffect(() => {
    setValue('commentTitle', userName);
  }, [userName]);

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
        {postDetail && <Header channelName={postDetail?.channel.name} />}
        {postDetail && (
          <PrePost
            darkMode={darkMode}
            postId={postId}
            postDetail={postDetail}
            userName={userName}
          />
        )}
        <Comment
          darkMode={darkMode}
          register={register}
          userName={userName}
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
