import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { CodeForForms, DataListForms } from './dataForPages/dataForms';
import { DataList } from '../components/dataList/DataList';

export const Forms: React.FC = () => {
  const { Text, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        Формы - это часть большинства веб-приложений. Однако их создание и
        управление может быть сложным для новичков. В React существует несколько
        способов использования форм в приложении, в зависимости от потребностей
        и предпочтений разработчика.
      </Paragraph>
      <DataList {...DataListForms} />
      <Paragraph>
        Пример простого React приложения с формой, которая использует библиотеку{' '}
        <Text mark strong>
          react-hook-form
        </Text>{' '}
        для управления формами и{' '}
        <Text mark strong>
          yup
        </Text>{' '}
        для валидации входных данных.
      </Paragraph>
      {<CodeEditor code={CodeForForms.form}></CodeEditor>}
    </>
  );
};
