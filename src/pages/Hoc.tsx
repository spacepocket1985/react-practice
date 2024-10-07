import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { CodeForHoc, DataListHoc } from './dataForPages/dataHoc';
import { DataList } from '../components/dataList/DataList';

export const Hoc: React.FC = () => {
  const { Text, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        <Text mark strong>
          Higher-Order Components (HOC)
        </Text>{' '}
        в React — это шаблон проектирования, который позволяет повторно
        использовать логику компонентов. HOС представляют собой функции, которые
        принимают компонент и возвращают новый компонент, оборачивающий или
        модифицирующий исходный.
      </Paragraph>
      <Paragraph>
        <Text mark strong>
          HOC
        </Text>{' '}
        используется для добавления функциональности к компонентам без изменения
        их кода. Например, вы можете создать HOC для управления состоянием,
        получения данных или реализации логики маршрутизации.
      </Paragraph>
      <Paragraph>
        Пример HOC, который добавляет обертку вокруг компонента и выводит
        сообщение о загрузке.
      </Paragraph>
      {<CodeEditor code={CodeForHoc.hoc}></CodeEditor>}
      <DataList {...DataListHoc} />
    </>
  );
};
