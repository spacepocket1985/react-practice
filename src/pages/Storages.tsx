import { Typography } from 'antd';
import { CodeEditor } from '../components/codeEditor/CodeEditor';
import { DataList } from '../components/dataList/DataList';
import {
  CodeForStorages,
  DataListCoockies,
  DataListCoockiesVsLS,
} from './dataForPages/dataStorages';

export const Storages: React.FC = () => {
  const { Text, Title, Paragraph } = Typography;
  return (
    <>
      <Title level={4}>📄Local Storage</Title>
      <Paragraph>
        <Text mark strong>
          Local Storage
        </Text>{' '}
        - это механизм, который позволяет веб-приложениям сохранять данные
        локально в браузере. Это означает, что данные будут сохранены после
        закрытия браузера и перезагрузки страницы.
      </Paragraph>
      <Paragraph>
        LocalStorage может быть использован для хранения различных типов данных,
        таких как строки, числа, булевы значения и объекты. Он может быть
        полезен для хранения пользовательских настроек (например темная тема на
        сайте), предпочтений пользователя и других данных, которые могут быть
        использованы для персонализации пользовательского опыта. Для записи
        данных в LocalStorage можно использовать localStorage объекта window в
        JavaScript.
      </Paragraph>
      {<CodeEditor code={CodeForStorages.storage}></CodeEditor>}
      <Title level={4}>📋Session Storage</Title>
      <Paragraph>
        <Text mark strong>
          Session Storage
        </Text>{' '}
        похож на LocalStorage, но данные хранятся только в течение сессии. Они
        исчезают после закрытия вкладки или окна.
      </Paragraph>
      {<CodeEditor code={CodeForStorages.sessionStorage}></CodeEditor>}
      <Title level={4}>📗LocalForage</Title>
      <Paragraph>
        <Text mark strong>
          LocalForage
        </Text>{' '}
        — это библиотека, которая обеспечивает улучшенное API для хранения
        данных в браузере. Она позволяет работать с асинхронными операциями и
        поддерживает различные механизмы хранения (как IndexedDB, WebSQL, и
        LocalStorage). Это делает её более мощным инструментом для работы с
        данными.
      </Paragraph>
      <Title level={4}>🍪Cookies</Title>
      <Paragraph>
        <Text mark strong>
          Cookies -
        </Text>{' '}
        это небольшие текстовые файлы, которые веб-сайты отправляют и хранят на
        компьютере пользователя через его веб-браузер. Они представляют собой
        удобный механизм для хранения небольших данных, связанных с
        пользователем и веб-сайтом. В контексте React приложений, cookies могут
        быть использованы для сохранения состояния приложения и обеспечения
        персонализации.
      </Paragraph>
      <DataList {...DataListCoockies} />
      <DataList {...DataListCoockiesVsLS}></DataList>
      <Title level={5}>Работа с Cookies в React</Title>
      <Paragraph>
        В React приложениях можно работать с cookies, используя{' '}
        <Text mark strong>
          JavaScript API
        </Text>{' '}
        для работы с ними или же библиотеку{' '}
        <Text mark strong>
          https://www.npmjs.com/package/cookie.
        </Text>{' '}
      </Paragraph>
    </>
  );
};
