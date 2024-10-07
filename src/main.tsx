import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ConfigProvider } from 'antd';

import App from './App';

import './index.css';

const customTheme = {
  token: {
    fontSize: 16,
  },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={customTheme}>
      <App />
    </ConfigProvider>
    ,
  </StrictMode>
);
