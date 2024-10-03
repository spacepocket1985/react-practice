import { Menu } from 'antd';

const MenuItems = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
export const MainMenu: React.FC = () => {
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
