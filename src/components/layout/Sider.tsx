import { Layout } from 'antd';
import { MainMenu } from '../menu/MainMenu';

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  margin: '5px',
  borderRadius: '10px',
};

export const Sider: React.FC = () => {
  const { Sider } = Layout;

  // const siderStyle: React.CSSProperties = {
  //   borderRight:'5px solid #fff',
  //   overflow: 'auto',
  //   height: '100vh',
  //   position: 'fixed',
  //   insetInlineStart: 0,
  //   top: 0,
  //   bottom: 0,
  //   scrollbarWidth: 'thin',
  //   scrollbarColor: 'unset',
  // };

  return (
    <Sider style={siderStyle}>
      <MainMenu />
    </Sider>
  );
};
