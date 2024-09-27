import { useState } from 'react';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export const SiblingComponent: React.FC = () => {
  const [text, setText] = useState('Some text');
  const handleClick = () => {
    setText('REDEV');
  };
  return (
    <WrapperComponent indicator="SiblingComponent">
      <p>{`Текущий текст: `}</p>{' '}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button onClick={handleClick}>Изменить текст</button>
    </WrapperComponent>
  );
};
