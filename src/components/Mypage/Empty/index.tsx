import * as Style from './index.style';

interface EmptyProps {
  text: string;
}

function Empty({ text }: EmptyProps) {
  return (
    <Style.Container>
      <span className="info-text">아직 {text} 없습니다.</span>
    </Style.Container>
  );
}

export default Empty;
