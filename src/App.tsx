import { FC } from 'react';

import { Header } from './components/layout/Header';
import { NumberComponent } from './components/numberComponent/NumberComponent';
import { StringComponent } from './components/stringComponent/StringComponent';
import { BooleanComponent } from './components/booleanComponent/BooleanComponent';
import { FunctionComponent } from './components/functionComponent/FunctionComponent';
import { ObjectComponent } from './components/objectComponent/ObjectComponent';

import './App.css';
import { ArrayComponent } from './components/arrayComponent/ArrayComponent';

const App: FC = () => {
  const exampleObject = { key: 'Year', value: 2024 };
  const exampleFunction = () => alert('Click!');
  const exampleArray = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <>
      <Header />
      <main>
        <NumberComponent numberProp={100} />
        <StringComponent stringProp={'Hello world'} />
        <BooleanComponent booleanProp={true} />
        <ObjectComponent objectProp={exampleObject} />
        <FunctionComponent functionProp={exampleFunction} />
        <ArrayComponent arrayProp={exampleArray} />
      </main>
    </>
  );
};

export default App;
