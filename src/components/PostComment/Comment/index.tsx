import * as Style from './index.style';

function Comment() {
  return (
    <>
      <Style.CommentContainer>
        <Style.CommentTitle>사용자 명</Style.CommentTitle>
        <Style.CommentTitleUnderLine />
        <Style.CommentContent placeholder="댓글을 입력하세요" />
      </Style.CommentContainer>
    </>
  );
}

export default Comment;
