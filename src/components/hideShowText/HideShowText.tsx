import { useState } from 'react';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export const HideShowText: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const someVisibleText = 'Yes, you see some text';
  const buttonLable = isVisible ? 'hide text' : 'show text';
  return (
    <WrapperComponent indicator="Hides or shows text using a button">
      <button onClick={handleClick}>{buttonLable}</button>
      {isVisible && <p>{someVisibleText}</p>}
    </WrapperComponent>
  );
};
