import {
  LetterContainer,
  LetterContent,
  LetterTitle,
  UnderLine
} from './index.style';

function Letter() {
  return (
    <LetterContainer>
      <LetterTitle placeholder="제목을 입력하세요"></LetterTitle>
      <UnderLine />
      <LetterContent placeholder="내용을 입력하세요"></LetterContent>
    </LetterContainer>
  );
}

export default Letter;
