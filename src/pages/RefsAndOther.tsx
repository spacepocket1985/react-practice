import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { codeForRefs } from './dataForPages/daraRefs';

export const RefsAndOther: React.FC = () => {
  const { Text, Title, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        <Title level={4}>🔗Refs</Title>
        <Text strong mark>
          Refs (ссылки)
        </Text>{' '}
        позволяют получить доступ к DOM-элементам или компонентам, созданным
        React. Это полезно, когда необходимо напрямую взаимодействовать с
        элементами, например, для управления фокусом, текстом или анимацией.
      </Paragraph>
      <CodeEditor code={codeForRefs.refs}></CodeEditor>
      <Paragraph>
        <Title level={4}>🔑Key</Title>
        <Text strong mark>
          Ключи (key)
        </Text>{' '}
        помогают React идентифицировать элементы списка и оптимизировать процесс
        рендеринга. Каждый элемент должен иметь уникальный ключ, чтобы React
        знал, какие элементы были изменены, добавлены или удалены.
      </Paragraph>
      <CodeEditor code={codeForRefs.keys}></CodeEditor>
      <Paragraph>
        Ключи нужно определять непосредственно внутри массивов. Если не указать
        ключи, в консоли увидим сообщение:{' '}
        <Text mark strong>
          Warning: Each child in an array or iterator should have a unique “key”
          prop.
        </Text>{' '}
        Ключи оптимизируют работу с элементами массивов, уменьшают количество
        ненужных удалений и созданий элементов.
      </Paragraph>
      <Paragraph>
        Без key механизм reconciliation сверяет компоненты попарно между текущим
        и новым VDOM. Из-за этого может происходить большое количество лишних
        перерисовок интерфейса, что замедляет работу приложения. Добавляя key,
        мы помогаем механизму reconciliation тем, что с key он сверяет не
        попарно, а ищет компоненты с тем же key (тег / имя компонента при этом
        учитывается) — это уменьшает количество перерисовок интерфейса.
        Обновлены/добавлены будут только те элементы, которые были изменены/не
        встречались в предыдущем дереве.{' '}
      </Paragraph>
      <Paragraph>
        <Title level={4}>🏰Fragment</Title>
        <Text strong mark>
          Fragment
        </Text>{' '}
        позволяет группировать несколько элементов без добавления лишнего узла в
        DOM. Это помогает сохранить структуру документа и избежать ненужных
        div-ов.
      </Paragraph>
      <CodeEditor code={codeForRefs.fragment}></CodeEditor>
      <Paragraph>
        Вы можете использовать сокращённую запись (пустые теги{' '}
        <Text code>{`<>...</>`}</Text>), чтобы избежать эксплицитного импорта
        Fragment:
      </Paragraph>
      <CodeEditor code={codeForRefs.fragmentShort}></CodeEditor>
      <Paragraph>
        Когда используется прямой импорт
        <Text code>Fragment</Text>, можно передать атрибут
        <Text code>key</Text>, что полезно, когда нужно идентифицировать
        элементы в списках или при рендеринге динамических компонентов:
      </Paragraph>
      <CodeEditor code={codeForRefs.fragmentKey}></CodeEditor>
    </>
  );
};
