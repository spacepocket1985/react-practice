import { useState, useEffect } from 'react';
import { CounterMemo, CounterAction } from '../counter/Counter';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export const DidUpdateFunc: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('FuncComponentDidUpdate => update counter!');
  }, [counter]);

  const onCounterClick = (type: CounterAction): void => {
    switch (type) {
      case CounterAction.Increase:
        setCounter((prevState) => prevState + 1);
        break;
      case CounterAction.Decrease:
        setCounter((prevState) => prevState - 1);
        break;
      default:
        break;
    }
  };
  return (
    <WrapperComponent indicator="ComponentDidUpdate (Class)">
      <CounterMemo count={counter} action={onCounterClick} />
    </WrapperComponent>
  );
};
