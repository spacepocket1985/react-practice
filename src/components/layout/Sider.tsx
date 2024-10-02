import { Layout } from 'antd';
import { useState } from 'react';

export const Sider: React.FC = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
    </Sider>
  );
};
