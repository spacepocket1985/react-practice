import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

export const MainMenu: React.FC = () => {
  const MenuItems = routes.map((route, index) => ({
    key: index + 1,
    label: (
      <Link to={route.path} rel="noopener noreferrer">
        {route.menuDescription}
      </Link>
    ),
  }));

  return (
    <Menu
      theme="dark"
      mode="vertical"
      // defaultSelectedKeys={['1']}
      items={MenuItems}
      style={{ flex: 1, minWidth: 0, borderRadius: '10px' }}
    />
  );
};
