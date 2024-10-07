import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { DataList } from '../components/dataList/DataList';
import { codeForProps, DataListProps } from './dataForPages/dataProps';

export const Props: React.FC = () => {
  const { Text, Title, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        Пропсы <Text strong>(сокращение от properties)</Text> - это данные,
        которые передаются в компоненты React для настройки их поведения и
        внешнего вида. Они позволяют передавать информацию из родительского
        компонента в дочерний компонент. Дочерний компонент может читать эти{' '}
        <Text type="danger" strong>
          props
        </Text>{' '}
        и использовать их, например, для вывода данных на экран или для
        изменения своего поведения.
      </Paragraph>
      <Title level={4}>🍧Передача пропсов компонентам</Title>
      <Paragraph>
        Пропсы передаются в компоненты в виде атрибутов при их использовании в
        JSX. Например,{' '}
        <Text code>{`<ChildComponent message="Привет, Redev!" />`}</Text>{' '}
        передает пропс message со значением <Text code>Привет, Redev!</Text> в
        компонент ChildComponent и выводит это сообщение на экран.
      </Paragraph>
      <CodeEditor code={codeForProps.propsGive}></CodeEditor>
      <Title level={4}>🍰Доступ к пропсам внутри компонентов</Title>
      <Paragraph>
        В функциональных компонентах пропсы доступны как параметр функции
        компонента. Например, <Text code>{'(props) => {...}.'}</Text>{' '}
      </Paragraph>
      <CodeEditor code={codeForProps.propsAccessFunc}></CodeEditor>
      <Paragraph>
        В классовых компонентах пропсы доступны через{' '}
        <Text mark>this.props</Text> . Например,{' '}
        <Text mark>this.props.message</Text>. Пример с классовой компонентой:
      </Paragraph>
      <CodeEditor code={codeForProps.propsAccessClass}></CodeEditor>
      <Paragraph>
        <Text type="danger" strong>
          Props
        </Text>{' '}
        можно использовать для передачи любых данных, включая строки, числа,
        массивы, объекты и функции.{' '}
      </Paragraph>
      <Title level={5}>
        ⚠️Пропсы являются неизменяемыми (immutable), их нельзя изменять
        напрямую.
      </Title>
      <Paragraph>
        Можно использовать{' '}
        <Text type="danger" strong>
          состояние компонента (state)
        </Text>{' '}
        для изменения пропсов. Пропсы в React играют важную роль в передаче
        данных и настройке компонентов. Они позволяют создавать переиспользуемые
        компоненты. Правильное использование пропсов способствует лучшей
        организации кода и разделению ответственности между компонентами.
      </Paragraph>
      <DataList {...DataListProps} />
    </>
  );
};
