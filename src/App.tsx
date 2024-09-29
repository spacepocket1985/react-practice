import { FC } from 'react';

import { Header } from './components/layout/Header';
import './App.css';
import { DidMountClass } from './components/lifecycleComponent/DidMountClass';
import { DidMountFunc } from './components/lifecycleComponent/DidMountFunc';
import { DidUpdateClass } from './components/lifecycleComponent/DidUpdateClass';
import { DidUpdateFunc } from './components/lifecycleComponent/DidUpdateFunc';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <DidMountClass />
        <DidMountFunc />

        <DidUpdateClass />
        <DidUpdateFunc />
      </main>
    </>
  );
};

export default App;
