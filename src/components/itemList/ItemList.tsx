import React, { memo } from 'react';

export type ItemType = { name: string; age: number; city: string; id: string };
type ItemListPropsType = {
  items: ItemType[];
};

export const ItemList: React.FC<ItemListPropsType> = memo(({ items }) => {
  console.log('render ItemList');

  const renderItems = items.map((item) => (
    <li
      key={item.id}
    >{`Name - ${item.name}, age - ${item.age}, city - ${item.city}`}</li>
  ));

  return <ul>{renderItems}</ul>;
});
