import { ReactElement } from 'react';
import { useAtomValue } from 'jotai';
import HamburgerMenu from '@/components/Common/HamburgerMenu';
import NotificationMenu from '@/components/Common/NotificationMenu';
import { tokenAtom } from '@/store/auth';
import { Section } from './index.style';

interface MenuBarProps {
  children: ReactElement;
}
function MenuBar({ children }: MenuBarProps) {
  const tokenState = useAtomValue(tokenAtom);
  return (
    <Section>
      {tokenState && <NotificationMenu />}
      <HamburgerMenu />
      {children}
    </Section>
  );
}

export default MenuBar;
