import * as Style from './index.style';

function Comment({ register, userName, isEdit }) {
  return (
    <>
      <Style.CommentContainer>
        <Style.CommentTitleInput
          placeholder="작성자명을 입력해주세요"
          value={isEdit ? null : userName}
          {...register('commentTitle', {
            required: '작성자명은 반드시 입력하셔야합니다.'
          })}></Style.CommentTitleInput>

        <Style.CommentTitleUnderLine />
        <Style.CommentContent
          placeholder="댓글을 입력하세요"
          {...register('commentContent', {
            required: '댓글 내용은 반드시 입력하셔야합니다.'
          })}
        />
      </Style.CommentContainer>
    </>
  );
}

export default Comment;
