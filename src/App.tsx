import { Layout } from 'antd';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Header />
        <Content>main content</Content>
        <Footer />
      </Layout>
    </>
  );
};

export default App;
