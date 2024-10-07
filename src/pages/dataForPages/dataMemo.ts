import { DataListPropsType } from '../../components/dataList/DataList';

export const CodeForMemo = {
  reactMemo: `import React from 'react';

const MyComponent = React.memo((props) => {
  // Компонент будет перерисовываться только при изменении пропсов
  return (
    <div>
      {props.text}
    </div>
  );
}); `,
  reactMemoSecondParp: `import React from 'react';

const MyComponent = React.memo((props) => {
  // Компонент будет перерисовываться только при изменении пропсов с помощью 
  // compareFunction
  return (
    <div>
      {props.text}
    </div>
  );
}, (prevProps, nextProps) => {
  // compareFunction - пользовательская функция сравнения пропсов
  // Возвращает true, если пропсы должны считаться равными и компонент не должен перерисовываться
});`,
  useMemo: `import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  const processedData = useMemo(() => {
    // Вычисления, требующие много времени или ресурсов
    // Например, фильтрация или сортировка массива данных
    return processData(data);
  }, [data]); // Зависимость - значение пропса "data"

  return (
    <div>
      {processedData}
    </div>
  );
};`,
};

export const DataListReactMemo: DataListPropsType = {
  header: `React.memo:`,
  listData: [
    `Используйте, когда у вас есть функциональный компонент, который зависит от props и может повторно рендериться без изменения этих props.`,
    `Особенно полезно для компонентов, которые принимают сложные объекты или функции в качестве props.`,
  ],
};

export const DataListUseMemo: DataListPropsType = {
  header: `useMemo:`,
  listData: [
    `Используйте, если у вас есть дорогие вычисления, результаты которых нужно запомнить.`,
    `Особенно полезно для компонентов, которые принимают сложные объекты или функции в качестве props.`,
  ],
};
