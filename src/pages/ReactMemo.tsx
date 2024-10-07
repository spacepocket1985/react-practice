import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import {
  CodeForMemo,
  DataListReactMemo,
  DataListUseMemo,
} from './dataForPages/dataMemo';
import { DataList } from '../components/dataList/DataList';

export const ReactMemo: React.FC = () => {
  const { Title, Text, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        В React есть несколько способов оптимизации производительности
        компонентов, и два из них — это React.memo и useMemo.
      </Paragraph>
      <Title level={4}>📷React.memo</Title>
      <Paragraph>
        <Text strong mark>
          React.memo
        </Text>{' '}
        — это функциональный компонент, который предотвращает повторный
        рендеринг компонента, если его{' '}
        <Text strong type="danger">
          props
        </Text>{' '}
        не изменились. Это полезно для оптимизации функциональных компонентов,
        которые не зависят от состояния и контекста.
      </Paragraph>
      <CodeEditor code={CodeForMemo.reactMemo}></CodeEditor>
      <Paragraph>
        <Title level={5}>
          ⚠️ В React.memo можно использовать второй параметр — функцию
          сравнения.
        </Title>
        Эта функция, позволяет настраивать логику определения, нужно ли повторно
        рендерить компонент. По умолчанию React.memo выполняет поверхностное
        сравнение props, но вы можете предоставить свою функцию для более тонкой
        настройки.
      </Paragraph>
      <CodeEditor code={CodeForMemo.reactMemoSecondParp}></CodeEditor>
      <Paragraph>
        Использование React.memo позволяет сократить количество повторных
        рендеров и улучшить производительность приложения, особенно для
        компонентов с большим количеством данных или сложными вычислениями
        внутри.
      </Paragraph>
      <Title level={4}>🎥useMemo</Title>
      <Paragraph>
        {' '}
        <Text strong mark>
          useMemo — это хук,
        </Text>{' '}
        который позволяет запоминать результат вычисления значения. Он будет
        пересчитывать закэшированное значение только тогда, когда изменятся
        указанные зависимости. Это помогает избежать ненужных перерасчетов в
        функции или вычислениях, которые могут быть дорогими по
        производительности..
      </Paragraph>
      <CodeEditor code={CodeForMemo.useMemo}></CodeEditor>
      <Paragraph>
        В этом примере результат вычисления processData будет сохраняться и
        пересчитываться только при изменении значения пропса data. При
        последующих рендерах, если data не изменилось, будет использован
        сохраненный результат.
      </Paragraph>
      <Title level={4}>📌Когда использовать React.memo и useMemo</Title>
      <DataList {...DataListReactMemo} />
      <DataList {...DataListUseMemo} />
    </>
  );
};
