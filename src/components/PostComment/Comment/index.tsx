import {
  CommentContainer,
  CommentContent,
  CommentTitle,
  CommentUnderLine
} from './index.style';

function Comment() {
  return (
    <>
      <CommentContainer>
        <CommentTitle>기본 제목</CommentTitle>
        <CommentUnderLine />
        <CommentContent placeholder="댓글을 입력하세요" />
      </CommentContainer>
    </>
  );
}

export default Comment;
