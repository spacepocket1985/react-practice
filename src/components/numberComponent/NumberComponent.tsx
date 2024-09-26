import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

type NumberComponentProps = { numberProp: number };

export const NumberComponent: React.FC<NumberComponentProps> = ({
  numberProp,
}) => {
  return (
    <WrapperComponent indicator="001 - NumberComponent">
      <div>Number: {numberProp}</div>
    </WrapperComponent>
  );
};
