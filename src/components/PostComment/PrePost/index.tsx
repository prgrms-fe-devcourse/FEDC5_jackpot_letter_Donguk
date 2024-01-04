import { useState } from 'react';
import * as Style from './index.style';

function PrePost() {
  const [temporaryContent, setTemporaryContent] = useState([
    {
      user: '최익',
      comment:
        '1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글1번째 댓글'
    },
    {
      user: '머쓱이',
      comment: '2번째 댓글'
    },
    {
      user: '최익',
      comment: '1번째 댓글'
    },
    {
      user: '머쓱이',
      comment: '2번째 댓글'
    },
    {
      user: '최익',
      comment: '1번째 댓글'
    },
    {
      user: '머쓱이',
      comment: '2번째 댓글'
    },
    {
      user: '최익',
      comment: '1번째 댓글'
    },
    {
      user: '머쓱이',
      comment: '2번째 댓글'
    },
    {
      user: '최익',
      comment: '1번째 댓글'
    },
    {
      user: '머쓱이',
      comment: '2번째 댓글'
    }
  ]);

  return (
    <>
      <Style.PrePostAndCommentContainer>
        <Style.PrePostContainer>
          <Style.PrePostInnerTitle>기본 제목</Style.PrePostInnerTitle>
          <Style.PrePostUnnerline />
          <Style.PrePostContent>기본 내용</Style.PrePostContent>
        </Style.PrePostContainer>
        <Style.LikeCommentContainer>
          <Style.LikeLogoContainer>
            <Style.LikeLogo src="/src/assets/Like.svg" />
            <Style.ListCount>1</Style.ListCount>
          </Style.LikeLogoContainer>
          <Style.CommentCountText>
            총{' '}
            <Style.CommentCount>{temporaryContent.length}개</Style.CommentCount>
            의 댓글이 있습니다.
          </Style.CommentCountText>
        </Style.LikeCommentContainer>
        <Style.PreCommentContainer>
          {temporaryContent.map(({ comment }, idx) => (
            <Style.PrePostComment key={idx}>
              <Style.PrePostUserName>사용자 명: </Style.PrePostUserName>
              {comment}
            </Style.PrePostComment>
          ))}
        </Style.PreCommentContainer>
      </Style.PrePostAndCommentContainer>
    </>
  );
}

export default PrePost;
