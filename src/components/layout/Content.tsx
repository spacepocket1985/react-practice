import { Layout } from 'antd';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  borderRadius: '10px',
  margin: '0 5px',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#001529',
};

export const Content: React.FC = () => {
  const { Content } = Layout;

  return <Content style={contentStyle}>content</Content>;
};
