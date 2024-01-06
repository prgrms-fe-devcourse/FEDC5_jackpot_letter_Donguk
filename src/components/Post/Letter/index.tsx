import * as Style from './index.style';

function Letter({ register }) {
  return (
    <Style.LetterContainer>
      <Style.LetterTitle
        placeholder="작성자명을 입력하세요(최대 15자)"
        maxLength={15}
        {...register('letterTitle', {
          required: '작성자명은 반드시 입력해야합니다.'
        })}
      />
      <Style.TitleUnderLine />
      <Style.LetterContent
        placeholder="내용을 입력하세요"
        {...register('letterComment', {
          required: '편지 내용은 반드시 입력해야합니다.'
        })}
      />
    </Style.LetterContainer>
  );
}

export default Letter;
