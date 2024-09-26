import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

type FunctionComponentProps = { functionProp: () => void };

export const FunctionComponent: React.FC<FunctionComponentProps> = ({
  functionProp,
}) => {
  return (
    <WrapperComponent indicator="005 - FunctionComponent">
      <button onClick={functionProp}>Click Me!</button>
    </WrapperComponent>
  );
};
