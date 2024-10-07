import { Layout } from 'antd';
import { Footer } from './Footer';
import { Content } from './Content';
import { Header } from './Header';
import { Sider } from './Sider';

export const MainLayout: React.FC = () => {
  return (
    <Layout>
      <Sider />
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
};
