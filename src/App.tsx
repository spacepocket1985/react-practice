import { FC, useState } from 'react';

import { Header } from './components/layout/Header';
import { DidMountClass } from './components/lifecycleComponent/DidMountClass';
import { DidMountFunc } from './components/lifecycleComponent/DidMountFunc';
import { DidUpdateClass } from './components/lifecycleComponent/DidUpdateClass';
import { DidUpdateFunc } from './components/lifecycleComponent/DidUpdateFunc';
import { WillUnmountClass } from './components/lifecycleComponent/WillUnmountClass';
import { WillUnmountFunc } from './components/lifecycleComponent/WillUnmountFunc';
import { WrapperComponent } from './components/wrapperComponent/WrapperComponent';

import './App.css';

const App: FC = () => {
  const [classTimer, setClassTimer] = useState(false);
  const [funcTimer, setFuncTimer] = useState(false);

  const toggleFuncTimer = (): void => {
    setFuncTimer((state) => !state);
  };

  const toggleClassTimer = (): void => {
    setClassTimer((state) => !state);
  };

  return (
    <>
      <Header />
      <main>
        <DidMountClass />
        <DidMountFunc />

        <DidUpdateClass />
        <DidUpdateFunc />

        <WrapperComponent indicator="ComponentWillUnmount (Class)">
          {classTimer && <WillUnmountClass />}
          <button onClick={toggleClassTimer}>Toggle ClassTimer</button>
        </WrapperComponent>

        <WrapperComponent indicator="ComponentWillUnmount (Func)">
          {funcTimer && <WillUnmountFunc />}
          <button onClick={toggleFuncTimer}>Toggle FuncTimer</button>
        </WrapperComponent>
      </main>
    </>
  );
};

export default App;
