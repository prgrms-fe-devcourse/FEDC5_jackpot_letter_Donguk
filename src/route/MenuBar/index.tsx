import { ReactElement } from 'react';
import { useAtomValue } from 'jotai';
import HamburgerMenu from '@/components/Common/HamburgerMenu';
import NotificationMenu from '@/components/Common/NotificationMenu';
import { isLoggedInAtom } from '@/store/auth';
import { Section } from './index.style';

interface MenuBarProps {
  children: ReactElement;
}
function MenuBar({ children }: MenuBarProps) {
  const isLoggedIn = useAtomValue(isLoggedInAtom);

  return (
    <Section>
      {isLoggedIn && <NotificationMenu />}
      <HamburgerMenu />
      {children}
    </Section>
  );
}

export default MenuBar;
