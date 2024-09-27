import { useState } from 'react';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export const DataFromInput: React.FC = () => {
  const [value, setIsValue] = useState('');
  const handleInputCgange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsValue(e.currentTarget.value);
  };

  return (
    <WrapperComponent indicator="State data from input">
      <input
        type="text"
        onChange={handleInputCgange}
        placeholder="write here"
      />
      <p>{value}</p>
    </WrapperComponent>
  );
};
