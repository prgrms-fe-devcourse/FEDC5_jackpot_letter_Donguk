import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { useCommentDeleteMutation } from '@/hooks/api/useCommentDeleteMutation';
import { useLikeCreateMutation } from '@/hooks/api/useLikeCreateMutation';
import { useLikeDeleteMutation } from '@/hooks/api/useLikeDeleteMutation';
import { usePostDeleteMutation } from '@/hooks/api/usePostDeleteMutation';
import { usePostUpdateMutation } from '@/hooks/api/usePostUpdateMutation';
import likeIcon from '@/assets/Like.svg';
import completeIcon from '@/assets/complete.svg';
import deleteIcon from '@/assets/delete.svg';
import editIcon from '@/assets/edit.svg';
import { idAtom } from '@/store/auth';
import { Post } from '@/types/ResponseType';
import * as Style from './index.style';

interface PrePostProps {
  postId: string;
  postDetail: Post;
  darkMode: boolean;
  userName: string;
}

interface userFormProps {
  prePostContent: string;
}

const toastStyle = {
  fontWeight: 600,
  padding: '0.75rem 1rem',
  marginTop: '0.5rem'
};

function PrePost({ userName, darkMode, postId, postDetail }: PrePostProps) {
  const userId = useAtomValue(idAtom);

  const { mutationLikeCreate } = useLikeCreateMutation(postId); // 특정 포스트 좋아요 추가
  const { mutationLikeDelete } = useLikeDeleteMutation(postId); // 특정 포스트 좋아요 제거
  const { mutationPostDelete } = usePostDeleteMutation(); // 특정 포스트 제거
  const { mutationPostUpdate } = usePostUpdateMutation(postId); // 특정 포스트 수정
  const { mutationCommentDelete } = useCommentDeleteMutation(postId); // 특정 댓글 제거
  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<userFormProps>({
    mode: 'onSubmit',
    defaultValues: {
      prePostContent: postDetail && JSON.parse(postDetail.title).content
    }
  });

  const [postState, setPostState] = useState(false); // 상단 포스트 편집 여부 상태

  /** 포스트 좋아요 추가 함수 */
  const handleLikeCreateClick = async () => {
    /** 특정 포스트 상세 보기*/
    const isUserId = postDetail?.likes.find(({ user }) => user === userId);

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

  /** 특정 포스트 삭제 함수 */
  const handleDeletePostClick = () => {
    if (userName === '익명') {
      toast.error('익명 회원은 편지를 삭제 할 수 없습니다.');
      return;
    }
    const deleteCheck = confirm(
      '편지를 삭제 하시겠습니까? 편지를 삭제하시면 편지를 포함한 모든 댓글도 함께 삭제됩니다.'
    );

    if (deleteCheck) {
      mutationPostDelete({
        id: postId
      });

      navigator(`/channel/${postDetail.channel.name}`);
    }
  };

  /** 특정 댓글 삭제하는 함수 */
  const handleDeleteCommentClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (userName === '익명') {
      toast.error('익명 회원은 댓글을 삭제할 수 없습니다.');
      return;
    }
    const deleteCheck = confirm('댓글 삭제하시겠습니까?');
    if (deleteCheck) {
      const targetElement = e.target as HTMLElement;
      const commentId = targetElement.dataset.id;

      if (commentId) {
        mutationCommentDelete({
          id: commentId
        });
      }
    }
  };

  /** 포스트 수정 내용 서버 전송 함수 */
  const onSubmit = (submitData: userFormProps) => {
    mutationPostUpdate({
      postId,
      title: postDetail ? JSON.parse(postDetail.title).title : '',
      content: submitData.prePostContent,
      channelId: postDetail?.channel._id as string,
      color: postDetail ? JSON.parse(postDetail.title).color : ''
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
        <Style.PrePostContainer darkMode={darkMode}>
          <Style.PrePostInnerTitle darkMode={darkMode}>
            {postDetail && JSON.parse(postDetail.title).title}
          </Style.PrePostInnerTitle>
          <Style.PrePostUnnerline />
          {postState ? (
            <Style.PrePostEditContent
              darkMode={darkMode}
              defaultValue={postDetail && JSON.parse(postDetail.title).content}
              {...register('prePostContent', {
                required: '편지 내용은 반드시 입력해야 합니다.'
              })}
            />
          ) : (
            <Style.PrePostContent darkMode={darkMode}>
              {postDetail && JSON.parse(postDetail.title).content}
            </Style.PrePostContent>
          )}
          {postState ? (
            <Style.CompleteImg
              src={completeIcon}
              onClick={handleSubmit(onSubmit)}
            />
          ) : (
            <Style.EditImg
              src={editIcon}
              onClick={() => {
                if (userName === '익명') {
                  toast.error('익명 회원은 편지를 수정 할 수 없습니다.');
                  return;
                }
                handlePostToggleClick();
              }}
            />
          )}
          <Style.DeleteImg
            src={deleteIcon}
            onClick={handleDeletePostClick}
          />
        </Style.PrePostContainer>
        <Style.LikeCommentContainer>
          <Style.LikeLogoContainer onClick={handleLikeCreateClick}>
            <Style.LikeLogo src={likeIcon} />
            <Style.ListCount darkMode={darkMode}>
              {postDetail?.likes.length}
            </Style.ListCount>
          </Style.LikeLogoContainer>
          <Style.CommentCountText darkMode={darkMode}>
            총{' '}
            <Style.CommentCount>
              {postDetail?.comments.length}개
            </Style.CommentCount>
            의 댓글이 있습니다.
          </Style.CommentCountText>
        </Style.LikeCommentContainer>
        <Style.PreCommentContainer>
          {postDetail?.comments.map(
            ({ comment, _id, author }, idx) =>
              titleAndCommentParsing(comment) && (
                <Style.PrePostComment
                  darkMode={darkMode}
                  key={idx}>
                  <Style.PrePostUserName
                    onClick={() => navigator(`/user/${author._id}`)}>
                    {`💬 ${titleAndCommentParsing(comment).title}: `}
                  </Style.PrePostUserName>
                  {titleAndCommentParsing(comment).comment}
                  <Style.CommentDeleteImg
                    src={deleteIcon}
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
