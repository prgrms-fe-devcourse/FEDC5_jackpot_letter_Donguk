import { useAtomValue } from 'jotai';
import Loading from '@/components/PostComment/Loading';
import { darkAtom } from '@/store/theme';
import { Container } from './index.style';

function LoadingScreen() {
  const darkMode = useAtomValue(darkAtom);
  return (
    <Container
      className="loading-wrap"
      darkMode={darkMode}
    >
      <Loading loadingSize={60} />
    </Container>
  );
}

export default LoadingScreen;
