import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

type BooleanComponentProps = { booleanProp: boolean };

export const BooleanComponent: React.FC<BooleanComponentProps> = ({
  booleanProp,
}) => {
  return (
    <WrapperComponent indicator="003 - BooleanComponent">
      <div>Boolean: {booleanProp ? 'true' : 'false'}</div>
    </WrapperComponent>
  );
};
