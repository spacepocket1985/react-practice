import { FC } from 'react';

import { Header } from './components/layout/Header';
import { ParentComponent } from './components/parentComponent/ParentComponent';

import './App.css';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <ParentComponent />
      </main>
    </>
  );
};

export default App;
