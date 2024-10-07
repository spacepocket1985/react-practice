import { DataListPropsType } from '../../components/dataList/DataList';

export const CodeForState = {
  stateCreate: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Остальной код компонента
};`,
  updateState: `const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  // Остальной код компонента
};`,
  stateExample: `const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};`,
  statefromProps: `const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

const ChildComponent = ({ count }) => {
  return <p>Счетчик: {count}</p>;
};`,
  stateObject: `import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // создаем новый объект с обновленным свойством
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };`,
  stateClass: `import React, { useState } from 'react';  

// Определяем интерфейс состояния  
class CounterState {  
  handleIncrease(counter) {  
    // По умолчанию ничего не делаем  
    // Это будет переопределено в конкретных состояниях  
  }  
  
  handleDecrease(counter) {  
    // По умолчанию ничего не делаем  
  }  
}  

// Конкретное состояние для начального состояния счетчика  
class InitialState extends CounterState {  
  handleIncrease(counter) {  
    counter.setCount(counter.count + 1);  
    counter.setState(new IncreasedState());  
  }  
}  

// Конкретное состояние для увеличения счетчика  
class IncreasedState extends CounterState {  
  handleDecrease(counter) {  
    counter.setCount(counter.count - 1);  
    counter.setState(new InitialState());  
  }  
}  

// Главный компонент счетчика  
const Counter = () => {  
  const [count, setCount] = useState(0);  
  const [state, setState] = useState(new InitialState());  
  
  const handleIncrease = () => {  
    state.handleIncrease({ count, setCount, setState });  
  };  

  const handleDecrease = () => {  
    state.handleDecrease({ count, setCount, setState });  
  };  

  return (  
    <div>  
      <h2>Счетчик: {count}</h2>  
      <button onClick={handleIncrease}>Увеличить</button>  
      <button onClick={handleDecrease}>Уменьшить</button>  
    </div>  
  );  
};  

export default Counter;`,
};

export const DataListState: DataListPropsType = {
  header: 'Примечания',
  listData: [
    'При вызове useState в компоненте, он будет выполнен при каждом рендеринге компонента. Поэтому важно обеспечить стабильность и неизменность порядка вызовов хуков внутри компонента. (поговорим про это дальше в LifeCycle)',
    'Можно использовать несколько хуков useState в одном компоненте для добавления нескольких независимых состояний. (пример ниже)',
    'Если новое значение состояния совпадает с текущим значением, React выполнит оптимизацию и не проведет повторную отрисовку компонента.',
    'Важно помнить, что хуки могут использоваться только внутри функциональных компонентов или других хуков.',
    'Функция обновления состояния из useState может принимать значение или функцию, которая вычисляет новое значение состояния на основе предыдущего состояния. Это особенно полезно при работе с состоянием, которое зависит от предыдущего значения.',
  ],
};

export const DataListStateObject: DataListPropsType = {
  header: 'Важные моменты',
  listData: [
    'Не изменяй существующее состояние напрямую: Вместо этого создавай новый объект с помощью оператора spread. Это позволяет React правильно отслеживать изменения состояния и ререндерить компонент при необходимости.',
    'Используй функцию для обновления состояния: Когда новое состояние зависит от предыдущего, всегда! используй функцию для обновления, чтобы избежать проблем с конкурентным обновлением состояния.',
  ],
};

export const DataListStatAsync: DataListPropsType = {
  header: 'Асинхронное поведение сеттеров в React позволяет:',
  listData: [
    'Объединять несколько обновлений состояния в одно, что уменьшает количество рендеров и улучшает производительность.',
    '!!!Гарантировать!!!, что компоненты рендерятся с наиболее актуальным состоянием.',
  ],
};
