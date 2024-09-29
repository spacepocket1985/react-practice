import React from 'react';
import './Counter.css';

export enum CounterAction {
  Increase = 'Increase',
  Decrease = 'Decrease',
}

const areEqual = (
  prevProps: { count: number; action: (type: CounterAction) => void },
  nextProps: { count: number; action: (type: CounterAction) => void }
) => {
  return nextProps.count % 2 === 0 && prevProps.count % 2 === 0;
};

export const Counter: React.FC<{
  count: number;
  action: (type: CounterAction) => void;
}> = ({ count, action }) => {
  const handleOnClick = (type: CounterAction) => action(type);
  console.log('render counter')
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
