import { Typography } from 'antd';
import { DataList } from '../components/dataList/DataList';

const ListDataPureFunction = {
  header: '“Чистой” называется функция, которая:',
  listData: [
    'Для одинаковых входных данных всегда возвращает один результат.',
    'Не имеет побочных эффектов (то есть не изменяет внешние состояния).',
    'Не зависит от внешних состояний.',
  ],
};

export const Components: React.FC = () => {
  const { Text, Title, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        <Text mark strong>
          Компоненты
        </Text>
        - это небольшие, переиспользуемые элементы пользовательского интерфейса,
        которые объединены вместе, чтобы создать более крупные приложения.
      </Paragraph>
      <Paragraph>
        Компоненты позволяют разбить интерфейс на независимые части, про которые
        легко думать в отдельности. Во многом компоненты ведут себя
        <Text mark strong>
          как обычные функции JavaScript.
        </Text>
        Они принимают произвольные входные данные (так называемые «пропсы») и
        возвращают React-элементы, описывающие, что мы хотим увидеть на экране.
        Компоненты как кирпичики из которых ты можешь строит свое приложение
      </Paragraph>
      <Title level={5}>
        React компоненты могут быть классовыми или функциональными.{' '}
      </Title>

      <Paragraph>
        Пример объявления{' '}
        <Text strong type="success">
          классового компонента
        </Text>{' '}
        в React:
      </Paragraph>
      <pre>
        <Paragraph code>{`class MyComponent extends React.Component {
  render() {
    return <div>Hello, Redev!</div>;
  }
}
export default MyComponent;`}</Paragraph>
      </pre>

      <Paragraph>
        Пример объявления{' '}
        <Text strong type="success">
          функционального компонента
        </Text>{' '}
        в React:
      </Paragraph>
      <pre>
        <Paragraph code>{`const MyComponent = () => {
  return <div>Hello, Redev!</div>;
}
export default MyComponent;`}</Paragraph>
      </pre>
      <Paragraph>
        Оба примера создают компонент, который отображает текст{' '}
        <Text strong>Hello, Redev!</Text>. Разница заключается в том, что
        классовый компонент наследуется от базового класса React.Component и
        имеет доступ к дополнительным функциям, таким как состояние и методы
        жизненного цикла. 💡 Сейчас для объявления компонент{' '}
        <Text mark>используется функциональный подход.</Text> Классы потихоньку
        вымирают. Хотя ты еще можешь встретить проекты, где придется
        поддерживать код написанный на классах.
      </Paragraph>
      <Title level={5}>
        🚀Компонента должна себя вести как чистая функция.
      </Title>
      <DataList
        header={ListDataPureFunction.header}
        listData={ListDataPureFunction.listData}
      />
      <Title level={4}>Stateless VS Stateful</Title>
      <Paragraph>
        {
          'Когда речь идет о React, часто упоминаются термины "stateless" и "stateful". Чтобы понять, что они значат, давай разберемся c этим.'
        }
      </Paragraph>
      <Title level={5}>Stateless компоненты </Title>
      <Paragraph>
        Они просто принимают props и возвращают JSX, который описывает, как
        должен выглядеть UI. Эти компоненты не имеют внутреннего состояния и не
        могут изменять свое поведение в зависимости от событий или действий
        пользователя.
      </Paragraph>
      <pre>
        <Paragraph code>{`const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>;
};`}</Paragraph>
      </pre>
      <Paragraph>
        В этом примере компонент Greeting принимает проп name и отображает
        приветствие. Он не хранит состояние и не изменяется с течением времени.
      </Paragraph>

      <Title level={5}>Stateful компоненты </Title>
      <Paragraph>
        Stateful <Text mark>компоненты могут управлять состоянием</Text> и
        изменять свое поведение в зависимости от событий. Они используют
        внутреннее состояние, чтобы отслеживать изменения и обновлять UI в ответ
        на действия пользователя или другие события. С появлением хуков в React
        16.8 функциональные компоненты могут также управлять состоянием и
        эффектами. Теперь можно создавать stateful функциональные компоненты с
        помощью{' '}
        <Text strong type="danger">
          хуков useState и useEffect.
        </Text>
      </Paragraph>
      <pre>
        <Paragraph code>{`import React, { useState } from 'react';

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
};;`}</Paragraph>
      </pre>
      <Paragraph>
        ⚠️ Stateless компоненты просто рендерят UI, в то время как stateful
        компоненты имеют внутреннее состояние, которое позволяет им изменять
        своё поведение в ответ на события.
      </Paragraph>
    </>
  );
};
