import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { DataList } from '../components/dataList/DataList';
import {
  CodeOnState,
  DataListStatAsync,
  DataListState,
  DataListStateObject,
} from './dataForPages/dataState';

export const State: React.FC = () => {
  const { Text, Title, Paragraph } = Typography;
  return (
    <>
      <Paragraph>
        При разработке приложений{' '}
        <Text strong type="danger">
          состояние (state)
        </Text>{' '}
        играет важную роль. Оно представляет собой данные, которые используются
        внутри компонента для отслеживания и обновления информации. Состояние
        позволяет компонентам быть динамичными и реагировать на изменения данных
        или взаимодействие пользователя. Простыми словами, это то, что{' '}
        <Text strong type="danger">
          ИЗМЕНЯЕТСЯ
        </Text>{' '}
        в компоненте, нежели props-ы которые неизменны.
      </Paragraph>
      <Paragraph>
        💡Хук (hook) в контексте React — это специальная функция, которая
        позволяет подключаться к возможностям React из функциональных
        компонентов. Хуки были введены в React в версии 16.8 и позволяют
        использовать функциональные компоненты вместо классовых для большинства
        задач, для которых раньше требовались классы.
      </Paragraph>
      <Paragraph>
        В React есть возможность использовать state в функциональных
        компонентах, путем использования{' '}
        <Text strong type="danger">
          хука useState.
        </Text>
        <Text
          code
        >{`import React, { useState } from 'react'; const [state, setState] = useState(initialState);`}</Text>
      </Paragraph>
      <Paragraph>
        <Text strong type="danger">
          Хук useState
        </Text>{' '}
        позволяет функциональным компонентам в React добавлять локальное
        состояние.{' '}
      </Paragraph>
      <Paragraph>
        Он возвращает массив с парой значений: [текущее значение состояния,
        функцию для его обновления]. При вызове функции обновления, React
        перерисует компонент с новым значением состояния.
      </Paragraph>
      <Paragraph>
        <Text strong mark>
          state
        </Text>
        :текущее значение состояния.
      </Paragraph>
      <Paragraph>
        <Text strong mark>
          setState{' '}
        </Text>
        :функция для обновления значения состояния.
      </Paragraph>
      <Paragraph>
        <Text strong mark>
          initialState{' '}
        </Text>
        :(необязательный): начальное значение состояния. Может быть примитивным
        типом данных, объектом или функцией.
      </Paragraph>
      <Title level={4}>🔨Создание state</Title>
      <Paragraph>
        Например, можно создать состояние для отслеживания текущего счетчика:
      </Paragraph>
      <CodeEditor code={CodeOnState.stateCreate}></CodeEditor>
      <Title level={4}>🔧Обновление состояния</Title>
      <Paragraph>
        Для обновления состояния в функциональных компонентах используется
        функция{' '}
        <Text strong type="danger">
          setCount
        </Text>
        , которая является вторым элементом массива, возвращаемого{' '}
        <Text strong type="danger">
          useState
        </Text>
        . При вызове{' '}
        <Text strong type="danger">
          setCount{' '}
        </Text>
        передается новое значение состояния или функция. Когда новое состояние
        зависит от предыдущего, то лучше использовать функциональное обновление.
      </Paragraph>
      <CodeEditor code={CodeOnState.updateState}></CodeEditor>
      <Paragraph>
        React автоматически обновит компонент и перерисует его с новым значением
        состояния:
      </Paragraph>
      <Title level={4}>🔪Пример использования state в компонентах</Title>
      <Paragraph>
        Состояние позволяет компонентам отображать и обновлять данные. Чаще
        всего используется для временного хранения каких-то данных. Состояние
        также позволяет реагировать на события и обновлять компонент в
        соответствии с новыми данными. Пример использования состояния для
        отслеживания текущего счетчика и его отображения:
      </Paragraph>
      <CodeEditor code={CodeOnState.stateExample}></CodeEditor>
      <Title level={5}>
        💣State можно передавать в дочерние компоненты при помощи props.
      </Title>
      <CodeEditor code={CodeOnState.statefromProps}></CodeEditor>
      <Paragraph>
        В данном примере состояние счетчика хранится в родительском компоненте
        ParentComponent, а значение состояния передается в дочерний компонент
        ChildComponent через пропсы.
      </Paragraph>
      <DataList {...DataListState}></DataList>
      <Title level={4}>💾state с объектом.</Title>
      <Paragraph>
        При обновлении объекта в состоянии нужно создавать новый объект вместо
        изменения существующего, чтобы соблюсти принцип неизменяемости.
      </Paragraph>
      <CodeEditor code={CodeOnState.stateObject}></CodeEditor>
      <DataList {...DataListStateObject}></DataList>
      <Title level={4}>
        ⌚Функция-setter (например setState) - асинхронная операция!
      </Title>
      <Paragraph>
        Когда мы вызываем setState, React не обновляет состояние и не рендерит
        компонент немедленно. Вместо этого он помещает обновление в очередь.
        После этого React применяет все обновления состояния за один раз перед
        следующим рендером компонента.
      </Paragraph>
      <DataList {...DataListStatAsync}></DataList>
      <Title level={4}>📷State в классах</Title>
      <Paragraph>
        Хотя классовые компоненты сейчас не используются, но знать как с ними
        работать нужно.
      </Paragraph>
      <CodeEditor code={CodeOnState.stateClass}></CodeEditor>
    </>
  );
};
