import { Flex, List } from 'antd';
import { Typography } from 'antd';

const ListData = [
  'Эффективность: Виртуальный DOM позволяет React оптимизировать обновление DOM. Вместо того, чтобы изменять каждый элемент по отдельности, React находит минимальный набор изменений, которые необходимо внести, и применяет их к реальному DOM. Это снижает нагрузку на браузер и улучшает производительность приложения.',
  'Удобство программирования: Работа с виртуальным DOM упрощает разработку. Ты можешь думать о компонентах и их состояниях, не беспокоясь о том, как React будет обновлять реальный DOM. React самостоятельно заботится об эффективных изменениях.',
  'Переносимость: Виртуальный DOM абстрагирует тебя от различий в реализации DOM в разных браузерах. Ты можешь писать свое приложение, не думая о том, какой браузер будет его запускать. React самостоятельно обрабатывает эти различия.',
];

const ListDataReconciliation = [
  'Обновление состояния: Когда состояние компонента изменяется, React запускает процесс reconciliation. Он сравнивает предыдущее состояние компонента с новым состоянием, чтобы определить, какие части интерфейса нужно обновить.',
  'Сравнение элементов: React сравнивает элементы, которые представляют компоненты, и их дочерние элементы. Он анализирует их типы, свойства и ключи, чтобы понять, какие элементы нужно обновить, добавить или удалить.',
  'Обновление виртуального DOM: React использует виртуальный DOM (Virtual DOM), который является внутренним представлением интерфейса. Он создает новое виртуальное дерево элементов на основе изменений состояния компонента.',
  'Эффективные обновления: React делает эффективные обновления, минимизируя количество фактических изменений в реальном DOM. Он определяет, какие элементы действительно нужно обновить, и применяет только эти изменения в реальном DOM, чтобы избежать ненужных операций.',
];

export const VirtualDom: React.FC = () => {
  const { Text, Title, Paragraph } = Typography;

  return (
    <Flex vertical>
      <Title level={3}>Что такое DOM?</Title>
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
      <List
        header={
          <Title level={5}>Почему это так важно? Вот несколько причин:</Title>
        }
        footer={
          <Title level={5}>
            В итоге, использование виртуального DOM позволяет React быть
            эффективной, удобной в использовании библиотекой.{' '}
          </Title>
        }
        bordered
        dataSource={ListData}
        renderItem={(item) => (
          <List.Item>
            <Text mark>😸</Text> {item}
          </List.Item>
        )}
      />
      <Title level={2}>😎Reconciliation</Title>
      <Paragraph>
        Reconciliation - это процесс, при котором React сравнивает предыдущее
        состояние компонента с новым состоянием и определяет, какие изменения
        нужно внести в пользовательский интерфейс.
      </Paragraph>
      <List
        header={
          <Title level={5}>
            Reconciliation происходит по следующему сценарию:
          </Title>
        }
        bordered
        dataSource={ListDataReconciliation}
        renderItem={(item) => (
          <List.Item>
            <Text mark>😸</Text> {item}
          </List.Item>
        )}
      />
    </Flex>
  );
};
