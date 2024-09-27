import { useState } from 'react';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export const IncreaseState: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleIncreaseClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <WrapperComponent indicator="Increases state value by 1">
      <button onClick={handleIncreaseClick}>Click</button>
      <p className="sphere">{count}</p>
    </WrapperComponent>
  );
};
