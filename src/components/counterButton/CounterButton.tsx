import React from 'react';

export const CounterButton: React.FC<{ incCounter: () => void }> = React.memo(
  ({ incCounter }) => {
    console.log('render CounterButton');
    return (
      <>
        <button
          onClick={() => {
            incCounter();
          }}
        >
          Inc counter
        </button>
      </>
    );
  }
);
