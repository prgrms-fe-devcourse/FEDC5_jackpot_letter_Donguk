import { Link } from 'react-router-dom';
import { useSignOut } from '@/hooks/api/useSignOut';
import { Container } from './index.style';

interface SidebarItemProps {
  title: string;
  items: itemsType[];
}

type itemsType = {
  text: string;
  link: string;
};

function SidebarItem({ title, items }: SidebarItemProps) {
  const { mutateSignOut } = useSignOut();

  const handleLogOut = () => {
    mutateSignOut();
  };
  return (
    <Container>
      <p className="sidebar-items-title">{title}</p>
      <div className="sidebar-items-container">
        {items.map(({ text, link }, index) => (
          <li
            className="sidebar-item"
            key={index}>
            {text === '로그아웃' ? (
              <span onClick={handleLogOut}>{text}</span>
            ) : (
              <Link to={link}>{text}</Link>
            )}
          </li>
        ))}
      </div>
    </Container>
  );
}

export default SidebarItem;
