import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { CodeForEvents } from './dataForPages/dataEvents';

export const Events: React.FC = () => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <>
      <Paragraph>
        В React события (events) являются важной частью взаимодействия с
        пользователем. Они позволяют обрабатывать действия пользователя, такие
        как клики, наведение, отправка формы и другие. Вот пять наиболее часто
        используемых событий в React и примеры их применения:
      </Paragraph>
      <Title level={5}>☝️ onClick (Клик):</Title>
      <CodeEditor code={CodeForEvents.onClick}></CodeEditor>
      <Title level={5}>✋ onChange (Изменение):</Title>
      <CodeEditor code={CodeForEvents.onChange}></CodeEditor>
      <Title level={5}>👍 onSubmit (Отправка формы):</Title>
      <CodeEditor code={CodeForEvents.onSubmit}></CodeEditor>
      <Title level={5}>👊 onMouseOver (Наведение курсора):</Title>
      <CodeEditor code={CodeForEvents.onMouseOver}></CodeEditor>
      <Title level={5}>👌 onKeyDown (Нажатие клавиши):</Title>
      <CodeEditor code={CodeForEvents.onKeyDown}></CodeEditor>
      <Paragraph>
        Существует множество других событий, таких как{' '}
        <Text mark strong>
          onFocus, onBlur, onScroll
        </Text>
        и т. д., которые могут быть использованы в зависимости от конкретных
        потребностей твоего приложения.
      </Paragraph>
      <Title level={5}>
        💡В React, параметр event в callback-функции представляет объект
        события, который генерируется при изменении значения элемента формы или
        компонента. event.target.value содержит текущее значение input элемента.
      </Title>
      <CodeEditor code={CodeForEvents.events}></CodeEditor>
    </>
  );
};
