import { Layout } from 'antd';

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#000',
  backgroundColor: '#e8e0e0',
  margin: '5px',
  borderRadius: '10px',
};

export const Footer: React.FC = () => {
  const { Footer } = Layout;
  return (
    <Footer style={footerStyle}>
      ReDev Course ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
};
