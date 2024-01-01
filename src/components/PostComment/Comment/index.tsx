import * as Style from './index.style';

function Comment() {
  return (
    <>
      <Style.CommentContainer>
        <Style.CommentTitle>기본 제목</Style.CommentTitle>
        <Style.CommentTitleUnderLine />
        <Style.CommentContent placeholder="댓글을 입력하세요" />
      </Style.CommentContainer>
    </>
  );
}

export default Comment;
