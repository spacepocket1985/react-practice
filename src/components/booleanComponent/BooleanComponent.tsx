import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export const BooleanComponent: React.FC<{ booleanProp: boolean }> = ({
  booleanProp,
}) => {
  return (
    <WrapperComponent indicator="003 - BooleanComponent">
      <div>Boolean: {booleanProp ? 'true' : 'false'}</div>
    </WrapperComponent>
  );
};
