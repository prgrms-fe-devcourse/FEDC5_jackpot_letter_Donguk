import * as Style from './index.style';

function Letter() {
  return (
    <Style.LetterContainer>
      <Style.LetterTitle placeholder="작성자명을 입력하세요" />
      <Style.TitleUnderLine />
      <Style.LetterContent placeholder="내용을 입력하세요" />
    </Style.LetterContainer>
  );
}

export default Letter;
