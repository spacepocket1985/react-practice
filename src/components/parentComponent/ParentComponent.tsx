import { useState, useCallback, useMemo } from 'react';
import { DataForList } from '../itemList/DataForList';
import { ItemList } from '../itemList/ItemList';
import { SearchInput } from '../searchInput/SearchInput';
import { CounterButton } from '../counterButton/CounterButton';

export const ParentComponent: React.FC = () => {
  const [strForSort, setStrForSort] = useState('');
  const [count, setCount] = useState(0);

  const updateSortStr = useCallback((str: string): void => {
    setStrForSort(str);
  }, []);

  const incCounter = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const filteredListData = useMemo(() => {
    return strForSort.length === 0
      ? DataForList
      : DataForList.filter((item) =>
          item.name.toLowerCase().startsWith(strForSort.toLowerCase())
        );
  }, [strForSort]);

  return (
    <div className="parentWrapper">
      <ItemList items={filteredListData} />
      <>
        <SearchInput updateSortStr={updateSortStr} />
        <p className="counter">{count}</p>
        <CounterButton incCounter={incCounter} />
      </>
    </div>
  );
};
