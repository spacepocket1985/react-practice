import { FC } from 'react';

import { Header } from './components/layout/Header';
import { IncreaseState } from './components/increaseState/IncreaseState';
import { HideShowText } from './components/hideShowText/HideShowText';
import { DataFromInput } from './components/controlInput/DataFromInput';
import { ChangeTextColor } from './components/changeTextColor/ChangeTextColor';
import './App.css';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <IncreaseState />
        <HideShowText />
        <DataFromInput />
        <ChangeTextColor />
      </main>
    </>
  );
};

export default App;
