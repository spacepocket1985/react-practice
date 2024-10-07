import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { CodeForContext } from './dataForPages/dataContext';

export const Context: React.FC = () => {
  const { Title, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        Context предоставляет способ передачи данных через дерево компонентов
        без явной передачи пропсов от родительских компонентов к дочерним. Это
        особенно полезно, когда необходимо передать данные глубоко в иерархии
        компонентов, избегая просачивания пропсов через несколько промежуточных
        компонентов.
      </Paragraph>
      <Paragraph>
        Разберем код, который создает контекст темы приложения с использованием
        useContext
      </Paragraph>
      <Title level={5}>Создание контекста темы приложения</Title>
      {<CodeEditor code={CodeForContext.createContext}></CodeEditor>}
      <Title level={5}>Оборачиваем приложение</Title>
      <Paragraph>
        При использовании контекста, мы оборачиваем основной компонент
        приложения в ThemeProvider, чтобы все дочерние компоненты имели доступ к
        контексту темы:
      </Paragraph>
      {<CodeEditor code={CodeForContext.provider}></CodeEditor>}
      <Title level={5}>Переключатель темы</Title>
      <Paragraph>
        Создание компонента переключателя, который использует контекст для
        изменения темы:
      </Paragraph>
      {<CodeEditor code={CodeForContext.toggle}></CodeEditor>}
      <Paragraph>
        В этом коде мы создаем контекст для управления темой (светлой или
        темной) в приложении. Мы используем useContext для доступа к контексту в
        любом компоненте, который обернут в ThemeProvider. Компонент ToggleTheme
        позволяет пользователю переключать темы, изменяя состояние в контексте.
      </Paragraph>
      <Title level={5}>
        ⚠️Злоупотребление контекстом может привести к проблемам с
        производительностью!
      </Title>
      <Paragraph>
        Контекст вызывает повторный рендеринг всех дочерних компонентов, когда
        его значение меняется. Это может привести к ненужным рендерингам и
        снижению производительности.
      </Paragraph>
    </>
  );
};
