import { Button, Flex, Layout } from 'antd';
import { Typography } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppRouter } from '../../routes/AppRouter';
import { routes } from '../../routes/routes';
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  FolderOutlined,
} from '@ant-design/icons';

const contentStyle: React.CSSProperties = {
  padding: '10px',
  textAlign: 'justify',
  borderRadius: '10px',
  border: '2px solid #001529',
  margin: '0 5px',
  minHeight: 120,
  lineHeight: '120px',
};

export const Content: React.FC = () => {
  const { Content } = Layout;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const routeIndex = routes.findIndex((route) => route.path === pathname);

  return (
    <Content style={contentStyle}>
      {routeIndex !== -1 ? (
        <Typography.Title level={2} className="pageTitle">
          {routes[routeIndex].description}
        </Typography.Title>
      ) : null}
      <AppRouter />
      <Flex
        gap={10}
        align="center"
        justify="center"
        style={{ padding: '10px' }}
      >
        <Button
          type="primary"
          disabled={!routes[routeIndex - 1]}
          onClick={() => navigate(routes[routeIndex - 1].path)}
        >
          <CaretLeftOutlined />
          Предыдущий
        </Button>
        <Button>
          <FolderOutlined />
          Разделы
        </Button>
        <Button
          type="primary"
          disabled={!routes[routeIndex + 1]}
          onClick={() => navigate(routes[routeIndex + 1].path)}
        >
          Следующий
          <CaretRightOutlined />
        </Button>
      </Flex>
    </Content>
  );
};
