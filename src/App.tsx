import { FC } from 'react';

import { Header } from './components/layout/Header';
import './App.css';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <h3>Main</h3>
      </main>
    </>
  );
};

export default App;
