import { useState } from 'react';
import * as Style from './index.style';

function PrePost() {
  const [emptyContent, setEmptyContent] = useState([
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

  console.log('커밋을 위한 임시 출력', setEmptyContent);

  return (
    <>
      <Style.PrePostAndCommentContainer>
        <Style.PrePostContainer>
          <Style.PrePostInnerTitle>기본 제목</Style.PrePostInnerTitle>
          <Style.PrePostUnnerline />
          <Style.PrePostContent>기본 내용</Style.PrePostContent>
        </Style.PrePostContainer>
        <Style.PreCommentContainer>
          {emptyContent.map(({ comment }, idx) => (
            <Style.PrePostComment key={idx}>{comment}</Style.PrePostComment>
          ))}
        </Style.PreCommentContainer>
      </Style.PrePostAndCommentContainer>
    </>
  );
}

export default PrePost;
