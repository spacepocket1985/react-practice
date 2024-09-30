import React from 'react';
import './Counter.css';

export enum CounterAction {
  Increase = 'Increase',
  Decrease = 'Decrease',
}

type CounterPropsType = {
  count: number;
  action: (type: CounterAction) => void;
};

const areEqual = (prevProps: CounterPropsType, nextProps: CounterPropsType) => {
  const prevIsEven = prevProps.count % 2 === 0;
  const nextIsOdd = nextProps.count % 2 !== 0;

  return prevIsEven && nextIsOdd;
};

export const Counter: React.FC<CounterPropsType> = ({ count, action }) => {
  const handleOnClick = (type: CounterAction) => action(type);

  return (
    <div className="counterWrapper">
      <button
        onClick={() => {
          handleOnClick(CounterAction.Increase);
        }}
      >
        {CounterAction.Increase}
      </button>
      <p className="sphere">{count}</p>
      <button
        onClick={() => {
          handleOnClick(CounterAction.Decrease);
        }}
      >
        {CounterAction.Decrease}
      </button>
    </div>
  );
};

export const CounterMemo = React.memo(Counter, areEqual);
