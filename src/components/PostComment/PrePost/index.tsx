import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useAtomValue } from 'jotai';
import { useCommentDeleteMutation } from '@/hooks/api/useCommentDeleteMutation';
import { useGetPostDetailQuery } from '@/hooks/api/useGetPostDetailQuery';
import { useLikeCreateMutation } from '@/hooks/api/useLikeCreateMutation';
import { useLikeDeleteMutation } from '@/hooks/api/useLikeDeleteMutation';
import { usePostDeleteMutation } from '@/hooks/api/usePostDeleteMutation';
import { usePostUpdateMutation } from '@/hooks/api/usePostUpdateMutation';
import { idAtom } from '@/store/auth';
import * as Style from './index.style';

interface PrePostProps {
  postId: string;
  color: string;
  title: string;
  content: string;
  channelId: string;
}

interface userFormProps {
  prePostContent: string;
}

const toastStyle = {
  fontWeight: 600,
  padding: '0.75rem 1rem',
  marginTop: '0.5rem'
};

function PrePost({ postId, title, color, content, channelId }: PrePostProps) {
  const userId = useAtomValue(idAtom);
  const { mutationLikeCreate } = useLikeCreateMutation(postId); // 특정 포스트 좋아요 추가
  const { mutationLikeDelete } = useLikeDeleteMutation(postId); // 특정 포스트 좋아요 제거
  const { mutationPostDelete } = usePostDeleteMutation(); // 특정 포스트 제거
  const { mutationPostUpdate } = usePostUpdateMutation(channelId); // 특정 포스트 수정
  const { mutationCommentDelete } = useCommentDeleteMutation(postId); // 특정 댓글 제거
  const { data } = useGetPostDetailQuery(postId);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<userFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      prePostContent: data && JSON.parse(data.title).content
    }
  });

  const [postState, setPostState] = useState(false); // 상단 포스트 편집 여부 상태

  /** 포스트 좋아요 추가 함수 */
  const handleLikeCreateClick = async () => {
    /** 특정 포스트 상세 보기*/
    const isUserId = data?.likes.find(({ user }) => user === userId);

    if (!isUserId) {
      mutationLikeCreate({
        postId
      });
    } else {
      mutationLikeDelete({
        id: isUserId._id
      });
    }
  };

  /** 댓글 리스트 제목 및 댓글 parsing 함수 */
  const titleAndCommentParsing = (comment: string) => {
    try {
      return JSON.parse(comment);
    } catch (error) {
      return false;
    }
  };

  /** 특정 포스트 수정 함수 */
  const handlePostToggleClick = () => {
    setPostState((state) => !state);
  };

  /** */

  /** 특정 포스트 삭제 함수 */
  const handleDeletePostClick = () => {
    const deleteCheck = confirm(
      '편지를 삭제 하시겠습니까? 편지를 삭제하시면 편지를 포함한 모든 댓글도 함께 삭제됩니다.'
    );

    if (deleteCheck) {
      mutationPostDelete({
        id: postId
      });
    }
  };

  const handleDeleteCommentClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const deleteCheck = confirm('댓글 삭제하시겠습니까?');

    if (deleteCheck) {
      const targetElement = e.target as HTMLElement;
      const commentId = targetElement.dataset.id;

      if (commentId)
        mutationCommentDelete({
          id: commentId
        });
    }
  };

  /** 포스트 수정 내용 서버 전송 함수 */
  const onSubmit = (submitData: userFormProps) => {
    mutationPostUpdate({
      postId,
      title: data ? JSON.parse(data.title).title : '',
      content: submitData.prePostContent,
      channelId: data?.channel._id as string,
      color: color
    });

    handlePostToggleClick();
  };

  useEffect(() => {
    if (isSubmitting) {
      errors.prePostContent
        ? toast.error(errors.prePostContent.message as string)
        : null;
    }
  }, [isSubmitting]);

  return (
    <>
      <Style.PrePostAndCommentContainer>
        <Style.PrePostContainer>
          <Style.PrePostInnerTitle>{title}</Style.PrePostInnerTitle>
          <Style.PrePostUnnerline />
          {postState ? (
            <Style.PrePostEditContent
              defaultValue={content}
              {...register('prePostContent', {
                required: '편지 내용은 반드시 입력해야 합니다.'
              })}
            />
          ) : (
            <Style.PrePostContent>{content}</Style.PrePostContent>
          )}
          {postState ? (
            <Style.CompleteImg
              src="/src/assets/complete.svg"
              onClick={handleSubmit(onSubmit)}
            />
          ) : (
            <Style.EditImg
              src="/src/assets/edit.svg"
              onClick={handlePostToggleClick}
            />
          )}
          <Style.DeleteImg
            src="/src/assets/delete.svg"
            onClick={handleDeletePostClick}
          />
        </Style.PrePostContainer>
        <Style.LikeCommentContainer>
          <Style.LikeLogoContainer onClick={handleLikeCreateClick}>
            <Style.LikeLogo src="/src/assets/Like.svg" />
            <Style.ListCount>{data?.likes.length}</Style.ListCount>
          </Style.LikeLogoContainer>
          <Style.CommentCountText>
            총{' '}
            <Style.CommentCount>{data?.comments.length}개</Style.CommentCount>의
            댓글이 있습니다.
          </Style.CommentCountText>
        </Style.LikeCommentContainer>
        <Style.PreCommentContainer>
          {data?.comments.map(
            ({ comment, _id }, idx) =>
              titleAndCommentParsing(comment) && (
                <Style.PrePostComment key={idx}>
                  <Style.PrePostUserName>
                    {`💬 ${titleAndCommentParsing(comment).title}: `}
                  </Style.PrePostUserName>
                  {titleAndCommentParsing(comment).comment}
                  <Style.CommentDeleteImg
                    src="/src/assets/delete.svg"
                    data-id={_id}
                    onClick={handleDeleteCommentClick}
                  />
                </Style.PrePostComment>
              )
          )}
        </Style.PreCommentContainer>
      </Style.PrePostAndCommentContainer>
      <Toaster
        toastOptions={{
          style: toastStyle,
          duration: 1000
        }}
      />
    </>
  );
}

export default PrePost;
