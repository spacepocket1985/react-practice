import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export const StringComponent: React.FC<{ stringProp: string }> = ({
  stringProp,
}) => {
  return (
    <WrapperComponent indicator="002 - StringComponent">
      <div>String: {stringProp}</div>
    </WrapperComponent>
  );
};
