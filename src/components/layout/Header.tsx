import { Layout } from 'antd';

const headerStyle: React.CSSProperties = {
  margin: '5px',
  textAlign: 'center',
  borderRadius: '10px',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#001529',
};

export const Header: React.FC = () => {
  const { Header } = Layout;
  return (
    <Header style={headerStyle}>
      <h1>React notebook</h1>
    </Header>
  );
};
