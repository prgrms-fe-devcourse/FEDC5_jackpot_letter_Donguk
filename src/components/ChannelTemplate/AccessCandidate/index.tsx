import Private from '@/assets/Private.svg';
import Public from '@/assets/Public.svg';
import { theme } from '@/theme';
import { css } from '@emotion/react';
import { Container } from './index.style';

interface Props {
  security: boolean;
  text: string;
  selected: boolean;
  onClick?: () => void;
}
function AccessCandidate({ security, selected, text, onClick }: Props) {
  const selectedStyle = css`
    border: 3px solid ${theme.palette.main};
    width: calc(10rem - 7px);
    height: calc(5.5rem - 7px);
  `;
  return (
    <Container
      onClick={onClick}
      css={selected === security && selectedStyle}
    >
      <img src={security ? Private : Public} />
      <span>{text}</span>
    </Container>
  );
}

export default AccessCandidate;
