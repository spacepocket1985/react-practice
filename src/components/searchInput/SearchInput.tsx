import React from 'react';

export const SearchInput: React.FC<{
  updateSortStr: (str: string) => void;
}> = React.memo(({ updateSortStr }) => {
  console.log('render SearchInput');
  return (
    <>
      <input
        type="text"
        placeholder={'search by name'}
        onChange={(e) => {
          updateSortStr(e.target.value);
        }}
      />
    </>
  );
});
