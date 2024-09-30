import { FC, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/layout/Header';
import { List } from './components/list/LIst';

import './App.css';

export type ItemType = { id: string; name: string };

const App: FC = () => {
  const [data, setData] = useState<ItemType[]>([
    { id: uuidv4(), name: 'Timon' },
    { id: uuidv4(), name: 'Pumba' },
    { id: uuidv4(), name: 'Alice' },
    { id: uuidv4(), name: 'Bob' },
  ]);

  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = (): void => inputRef.current!.focus();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue)
      setData([...data, { name: inputValue, id: uuidv4() }]);
  };

  const handleChangeInputValue = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputValue(e.target.value);
  };

  const hundleUpdate = (id: string) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, name: item.name + '!!!' };
        }
        return item;
      })
    );
  };

  return (
    <>
      <Header />
      <main>
        <div className="wrapperInputBtn">
          <input
            value={inputValue}
            type="text"
            placeholder="write some text here"
            ref={inputRef}
            onKeyDown={handleKeyDown}
            onChange={handleChangeInputValue}
          />
          <button onClick={handleFocus}>focus</button>
        </div>
        <List data={data} onUpdateItem={hundleUpdate} />
      </main>
    </>
  );
};

export default App;
