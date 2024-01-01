import { useState } from 'react';
import {
  PrePostComment,
  PrePostContainer,
  PrePostContent,
  PrePostInner,
  PrePostInnerTitle,
  PrePostUnnerline
} from './index.style';

function PrePost() {
  const [emptyContent, setEmptyContent] = useState([
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
      <PrePostInner>
        <PrePostInnerTitle
          disabled={true}
          value={'기본 제목'}
        ></PrePostInnerTitle>
        <PrePostUnnerline />
        <PrePostContent
          disabled={true}
          value={'기본 내용'}
        ></PrePostContent>
      </PrePostInner>
      <PrePostContainer>
        {emptyContent.map(({ comment }, idx) => (
          <PrePostComment key={idx}>{comment}</PrePostComment>
        ))}
      </PrePostContainer>
    </>
  );
}

export default PrePost;
