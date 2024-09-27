import { FC } from 'react';

import { Header } from './components/layout/Header';
import './App.css';
import { DidMountClass } from './components/lifecycleComponent/DidMountClass';
import { DidMountFunc } from './components/lifecycleComponent/DidMountFunc';
import { DidUpdateClass } from './components/lifecycleComponent/DidUpdateClass';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <DidMountClass />
        <DidMountFunc />

        <DidUpdateClass />
      </main>
    </>
  );
};

export default App;
