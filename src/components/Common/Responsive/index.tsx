import { useAtomValue } from 'jotai';
import useModal from '@/hooks/useModal';
import { darkAtom } from '@/store/theme';
import Button from '../Button';
import ShortLogo from '../Logo/ShortLogo';
import TitleLogo from '../Logo/TitleLogo';
import Modal from '../Modal';
import ServiceInformation from './ServiceInformation';
import * as Style from './index.style';

function Responsive() {
  const darkMode = useAtomValue(darkAtom);
  const [visible, handleModalClick] = useModal();

  const handleBtnClick = (e: React.MouseEvent<HTMLElement>) => {
    handleModalClick(e);
  };

  return (
    <Style.Container>
      <Style.Logo>
        <Style.LogoWrapper>
          <ShortLogo darkMode={!darkMode} />
        </Style.LogoWrapper>
        <Style.TitleWrapper>
          <TitleLogo darkMode={darkMode} />
        </Style.TitleWrapper>
      </Style.Logo>
      <Style.Description darkMode={darkMode}>
        <Style.Main>
          박을 터트리며 마음을 나누는
          <br />
          大舶(대박) 사 건
        </Style.Main>
        <Style.Sub>
          평소 주변 사람에게 마음을 전하고 싶었나요? <br />
          대박 사건을 이용해보세요!
        </Style.Sub>
        <Button
          content="대박사건이 궁금하신가요?"
          onClick={handleBtnClick}
          styleOption={{ 'border-radius': '20px;', 'font-size': '1rem' }}
        />
        <Modal
          width={42}
          height={38}
          padding={3}
          visible={visible}
          handleModalClose={handleBtnClick}
          type={'center'}>
          <ServiceInformation />
        </Modal>
      </Style.Description>
      <Style.Pocket>
        {LETTER_COLOR.map((color, index) => (
          <img
            key={index}
            src={`${
              import.meta.env.VITE_PUBLIC_URL
            }/images/letter/${color}.png`}
            width={32}
          />
        ))}
      </Style.Pocket>
    </Style.Container>
  );
}

export default Responsive;

const LETTER_COLOR = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'mint',
  'pink',
  'purple'
];
