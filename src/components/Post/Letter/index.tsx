import * as Style from './index.style';

function Letter() {
  return (
    <Style.LetterContainer>
      <Style.LetterTitle placeholder="제목을 입력하세요"></Style.LetterTitle>
      <Style.TitleUnderLine />
      <Style.LetterContent placeholder="내용을 입력하세요"></Style.LetterContent>
    </Style.LetterContainer>
  );
}

export default Letter;
