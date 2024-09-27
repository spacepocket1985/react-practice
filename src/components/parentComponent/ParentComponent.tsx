import { useState } from 'react';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';
import { ChildComponent } from '../childComponent/ChildComponent';
import { SiblingComponent } from '../siblingComponent/SiblingComponent';

export const ParentComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((count) => count + 1);
  };

  const handleDecrease = () => {
    setCount((count) => (count > 0 ? count - 1 : count));
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleRandom = () => {
    setCount(Math.floor(Math.random() * 10) + 1);
  };
  return (
    <>
      <WrapperComponent indicator="ParentComponent">
        <p className="sphere">{count}</p>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleRandom}>Random</button>
        <button onClick={handleDecrease}>Decrease</button>
      </WrapperComponent>
      <ChildComponent counter={count} name="Alex" />
      <SiblingComponent />
    </>
  );
};
