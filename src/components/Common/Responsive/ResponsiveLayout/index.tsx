import { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useAtomValue } from 'jotai';
import { darkAtom } from '@/store/theme';
import Responsive from '..';
import { Container, Wrapper } from './index.style';

interface LayoutProps {
  children: ReactElement;
}

function ResponsiveLayout({ children }: LayoutProps) {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)'
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)'
  });

  const darkMode = useAtomValue(darkAtom);

  return (
    <Container>
      {(isPc || isTablet) && <Responsive />}
      <>
        <Wrapper
          isPc={isPc}
          isTablet={isTablet}
          darkMode={darkMode}
        >
          {children}
        </Wrapper>
      </>
    </Container>
  );
}

export default ResponsiveLayout;
