import * as Style from './index.style';

function ServiceInformation() {
  return (
    <Style.Container>
      <Style.Information>
        <Style.Title>💌 서비스 소개</Style.Title>
        <Style.SubTitle>大대舶박</Style.SubTitle>
        <p>
          박터트리기는 가족이나 친구와 소박하게 함께 즐기는{' '}
          <Style.Text>한국 전통 놀이</Style.Text>
          입니다. <br />
          주머니에 담은 편지로 친구의 박을 터트리며{' '}
          <Style.Text>큰 행운을 나누고 즐거움을 누리며 </Style.Text>마음을
          나눠보세요 💟
          <br />
          대박사건은 <Style.Text>익명/기명 SNS 커뮤니티</Style.Text>로 편지를
          통해 마음을 주고 받을 수 있습니다. <br />한 시기를 정리하는 순간까지
          따뜻한 추억으로 만들어보세요.
        </p>
      </Style.Information>
      <Style.Information>
        <Style.Title>✨ 주요 기능 소개</Style.Title>
        <Style.SubTitle>🌀 박을 생성해보세요!</Style.SubTitle>
        <p>
          박을 생성하고 친구들에게 링크를 공유해 주머니를 받아보시는건 어떤까요?
        </p>
        <Style.SubTitle>👛 주머니를 작성해보세요!</Style.SubTitle>
        <p>
          평소 마음을 전달하기 어려웠다면 익명으로 마음을 나눠보는건 어떤까요?
          <br />
          대박사건은 익명 / 기명으로 작성 가능해요!
        </p>
      </Style.Information>
    </Style.Container>
  );
}

export default ServiceInformation;
