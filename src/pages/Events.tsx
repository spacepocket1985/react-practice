import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { CodeOnEvents } from './dataForPages/dataEvents';

export const Events: React.FC = () => {
  const { Title, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        В React события (events) являются важной частью взаимодействия с
        пользователем. Они позволяют обрабатывать действия пользователя, такие
        как клики, наведение, отправка формы и другие. Вот пять наиболее часто
        используемых событий в React и примеры их применения:
      </Paragraph>
      <Title level={5}>☝️ onClick (Клик):</Title>
      <CodeEditor code={CodeOnEvents.onClick}></CodeEditor>
      <Title level={5}>✋ onChange (Изменение):</Title>
      <CodeEditor code={CodeOnEvents.onChange}></CodeEditor>
      <Title level={5}>
        💡В React, параметр event в callback-функции представляет объект
        события, который генерируется при изменении значения элемента формы или
        компонента. event.target.value содержит текущее значение input элемента.
      </Title>
      <Title level={5}>👍 onSubmit (Отправка формы):</Title>
      <CodeEditor code={CodeOnEvents.onSubmit}></CodeEditor>
      <Title level={5}>👊 onMouseOver (Наведение курсора):</Title>
      <CodeEditor code={CodeOnEvents.onMouseOver}></CodeEditor>
      <Title level={5}>👌 onKeyDown (Нажатие клавиши):</Title>
      <CodeEditor code={CodeOnEvents.onKeyDown}></CodeEditor>
      <Paragraph>
        Существует множество других событий, таких как onFocus, onBlur, onScroll
        и т. д., которые могут быть использованы в зависимости от конкретных
        потребностей твоего приложения.
      </Paragraph>
    </>
  );
};
