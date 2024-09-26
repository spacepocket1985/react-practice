import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export const NumberComponent: React.FC<{ numberProp: number }> = ({
  numberProp,
}) => {
  return (
    <WrapperComponent indicator="001 - NumberComponent">
      <div>Number: {numberProp}</div>
    </WrapperComponent>
  );
};
