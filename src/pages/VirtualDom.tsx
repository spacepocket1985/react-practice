import { Flex } from 'antd';
import { Typography } from 'antd';
import { DataList } from '../components/dataList/DataList';
import { ListDataReconciliation, VDomListData } from './dataForPages/dataVD';

export const VirtualDom: React.FC = () => {
  const { Text, Title, Paragraph } = Typography;

  return (
    <Flex vertical>
      <Title level={4}>Что такое DOM?</Title>
      <Paragraph style={{ textAlign: 'justify' }}>
        DOM - это сокращение от{' '}
        <Text type="danger" strong>
          Document Object Model
        </Text>
        (объектная модель документа). Когда ты открываешь веб-страницу в
        браузере, браузер создает структуру документа, которую можно представить
        в виде дерева элементов. Эти элементы - это HTML-теги, например, div, p,
        h1 и другие. DOM позволяет нам манипулировать этой структурой, изменять
        содержимое, стили, добавлять и удалять элементы.{' '}
        <Text strong>
          Каждый раз, когда происходит изменение данных в приложении, React
          должен обновить DOM, чтобы отобразить эти изменения на странице.
        </Text>
        Но вместо того, чтобы непосредственно вносить изменения в реальный DOM,
        <Text mark>React использует виртуальный DOM.</Text>
      </Paragraph>
      <Paragraph>
        Виртуальный DOM - это промежуточное представление DOM в памяти
        компьютера. React создает виртуальное дерево элементов, которое точно
        соответствует текущему состоянию компонентов. Затем React сравнивает это
        виртуальное дерево с реальным DOM и определяет, какие изменения
        необходимо внести.
      </Paragraph>
      <DataList {...VDomListData} />
      <Title level={4}>😎Reconciliation</Title>
      <Paragraph>
        Reconciliation - это процесс, при котором React сравнивает предыдущее
        состояние компонента с новым состоянием и определяет, какие изменения
        нужно внести в пользовательский интерфейс.
      </Paragraph>
      <DataList {...ListDataReconciliation} />
    </Flex>
  );
};
