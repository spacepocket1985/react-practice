import { Typography } from 'antd';
import { DataListMain } from './dataForPages/dataMain';
import { DataList } from '../components/dataList/DataList';

export const Main: React.FC = () => {
  const { Paragraph, Text } = Typography;
  return (
    <>
      <Paragraph>
        <Text mark strong>
          React notebook
        </Text>{' '}
        - это небольшое приложение, разработанное с использованием библиотеки
        React, предназначенное для создания интерактивного конспекта по основным
        темам и концепциям React. Проект включает в себя несколько основных
        разделов, каждый из которых раскрывает определённые аспекты работы с
        React, такие как компоненты, управление состоянием, роутинг и
        оптимизация производительности.
      </Paragraph>
      <DataList {...DataListMain} />
    </>
  );
};
