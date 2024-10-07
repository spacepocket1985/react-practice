import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { CodeForLifeCycle } from './dataForPages/dataLifeCycle';

export const LifeCycle: React.FC = () => {
  const { Text, Title, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        В React методы жизненного цикла компонентов делятся на классовые и
        функциональные компоненты (с использованием хуков).
      </Paragraph>
      <Title level={4}>🍒Классовые компоненты</Title>
      <Paragraph>
        В классовых компонентах жизненный цикл компонента можно управлять с
        помощью различных методов.
      </Paragraph>
      <Paragraph>
        1.{' '}
        <Text strong type="danger">
          constructor(props)
        </Text>
        : Вызывается при создании компонента, обычно используется для
        инициализации состояния и привязки методов.
      </Paragraph>
      <CodeEditor code={CodeForLifeCycle.componentConstructor}></CodeEditor>
      <Paragraph>
        2.{' '}
        <Text strong type="danger">
          Метод render()
        </Text>{' '}
        является обязательным для классовых компонентов. Он возвращает JSX,
        который определяет визуальное представление компонента.
      </Paragraph>
      <CodeEditor code={CodeForLifeCycle.componentRender}></CodeEditor>
      <Paragraph>
        3.{' '}
        <Text strong type="danger">
          componentDidMount():{' '}
        </Text>{' '}
        Вызывается сразу после монтирования компонента. Используется для
        выполнения запросов к API или подписки на события.
      </Paragraph>
      <CodeEditor code={CodeForLifeCycle.componentDidMount}></CodeEditor>
      <Paragraph>
        4.{' '}
        <Text strong type="danger">
          componentDidUpdate(prevProps, prevState):{' '}
        </Text>{' '}
        Вызывается после обновления компонента. Можно использовать для сравнения
        предыдущих и текущих пропсов или состояния.
      </Paragraph>
      <CodeEditor code={CodeForLifeCycle.componentDidUpdate}></CodeEditor>
      <Paragraph>
        5.{' '}
        <Text strong type="danger">
          componentWillUnmount():{' '}
        </Text>{' '}
        Вызывается перед размонтированием компонента. Полезно для очистки
        таймеров или отмены подписок.
      </Paragraph>
      <CodeEditor code={CodeForLifeCycle.componentWillUnmount}></CodeEditor>
      <Title level={4}>🍋Функциональные компоненты с хуками</Title>
      <Paragraph>
        С выходом хуков в React 16.8 код функциональных компонентов стал более
        гибким и читаемым. Главное — использовать хук useEffect для управления
        жизненным циклом.
      </Paragraph>
      <CodeEditor code={CodeForLifeCycle.useEffect}></CodeEditor>
      <Title level={5}>
        💡Таким образом, в классовых компонентах у нас есть конкретные методы,
        позволяющие отслеживать различные фазы жизненного цикла. В
        функциональных компонентах с хуками мы можем использовать useEffect для
        достижения аналогичных результатов, что делает код более компактным и
        понятным.
      </Title>
    </>
  );
};
