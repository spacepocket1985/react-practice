import { DataListPropsType } from '../../components/dataList/DataList';

export const CodeForComponents = {
  classExample: `class MyComponent extends React.Component {
  render() {
    return <div>Hello, Redev!</div>;
  }
}
export default MyComponent;`,
  funcExample: `class MyComponent extends React.Component {
  render() {
    return <div>Hello, Redev!</div>;
  }
}
export default MyComponent;`,
  stateless: `const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>;
};`,
  stateful: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};`,
};

export const ListPureFunction: DataListPropsType = {
  header: '“Чистой” называется функция, которая:',
  listData: [
    'Для одинаковых входных данных всегда возвращает один результат.',
    'Не имеет побочных эффектов (то есть не изменяет внешние состояния).',
    'Не зависит от внешних состояний.',
  ],
};
