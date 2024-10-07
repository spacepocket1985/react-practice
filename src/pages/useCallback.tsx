import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';

import { DataList } from '../components/dataList/DataList';
import {
  CodeForUSeCallback,
  DataListUseCallback,
} from './dataForPages/dataUseCallBack';

export const UseCallback: React.FC = () => {
  const { Title, Text, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        Хук useCallback в React позволяет оптимизировать производительность
        компонента, предотвращая создание новых функций при каждом рендере. Это
        особенно полезно, когда функции передаются как пропсы дочерним
        компонентам или используются в зависимостях других хуков, таких как
        useEffect.
      </Paragraph>
      <Title level={4}>Синтаксис useCallback:</Title>
      <CodeEditor code={CodeForUSeCallback.syntsx}></CodeEditor>
      <Paragraph>
        Первый аргумент — это функция, которая должна быть мемоизирована. Второй
        аргумент — массив зависимостей, который определяет, когда функция должна
        быть пересоздана.
      </Paragraph>
      <Paragraph>
        Вот пример использования <Text strong>useCallback</Text> с обоими
        параметрами:
      </Paragraph>
      <CodeEditor code={CodeForUSeCallback.example}></CodeEditor>
      <Paragraph>
        В этом примере useCallback создает мемоизированную версию функции
        doSomething, и эта версия будет обновляться только в случае изменения
        значений <Text strong>a</Text> или <Text strong>b</Text>. Если{' '}
        <Text strong>a и b</Text> не изменятся между рендерами компонента, то
        useCallback вернет ту же самую мемоизированную функцию.
      </Paragraph>

      <DataList {...DataListUseCallback} />
    </>
  );
};
