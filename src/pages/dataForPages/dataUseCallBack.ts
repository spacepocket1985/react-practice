import { DataListPropsType } from '../../components/dataList/DataList';

export const CodeForUSeCallback = {
  syntsx: `const memoizedCallback = useCallback(() => {  
  // Ваша логика здесь  
}, [dependencies]);  `,
  example: `const memoizedCallback = useCallback(
  () => doSomething(a, b),
  [a, b],
);`,
};

export const DataListUseCallback: DataListPropsType = {
  header: `Когда использовать useCallback и зачем`,
  listData: [
    `Производительность: Используйте useCallback, когда передаете функции в дочерние компоненты, которые используют React.memo, чтобы избежать лишних рендеров.`,
    `Зависимости хука: Используйте useCallback для функций, которые используются в массиве зависимостей других хуков, таких как useEffect или useMemo, чтобы избежать ненужных вызовов этих хуков.`,
    `Состояние и управление событиями: Если функция зависит от какой-либо переменной состояния и вам необходимо, чтобы она не пересоздавалась, когда это состояние не меняется.`,
  ],
};
