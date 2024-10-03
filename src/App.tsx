import { Layout } from 'antd';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Sider } from './components/layout/Sider';
import { Content } from './components/layout/Content';



const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Sider />
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};

export default App;
