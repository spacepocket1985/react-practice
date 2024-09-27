import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export const ChildComponent: React.FC<{ counter: number; name: string }> = ({
  counter,
  name,
}) => {
  return (
    <WrapperComponent indicator="ChildComponent">
      <p>{`Hello, ${name}! Текущий счетчик: ${counter}`}</p>
    </WrapperComponent>
  );
};
