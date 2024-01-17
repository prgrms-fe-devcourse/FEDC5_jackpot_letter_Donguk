import { IoLockClosedOutline, IoLockOpenOutline } from 'react-icons/io5';
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
      css={selected === security && selectedStyle}>
      {security ? (
        <IoLockClosedOutline
          size={28}
          color={theme.palette.dark}
        />
      ) : (
        <IoLockOpenOutline
          size={28}
          color={theme.palette.dark}
        />
      )}
      <span>{text}</span>
    </Container>
  );
}

export default AccessCandidate;
