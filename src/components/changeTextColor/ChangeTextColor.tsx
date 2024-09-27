import { useState } from 'react';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export const ChangeTextColor: React.FC = () => {
  const [color, setColor] = useState('red');
  const handleClick = () => {
    setColor(color === 'red' ? 'blue' : 'red');
  };
  const someText = `This text is ${color}`;
  const style = {
    color: color,
  };

  return (
    <WrapperComponent indicator="Сhange text color using a button">
      <button onClick={handleClick}>{'change color'}</button>
      <p style={style}>{someText}</p>
    </WrapperComponent>
  );
};
