import * as Style from './index.style';

function Comment({ register }) {
  return (
    <>
      <Style.CommentContainer>
        <Style.CommentTitle>사용자 명</Style.CommentTitle>
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
