import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

type ObjectComponentProps = { objectProp: { key: string; value: number } };

export const ObjectComponent: React.FC<ObjectComponentProps> = ({
  objectProp,
}) => {
  return (
    <WrapperComponent indicator="004 - ObjectComponent">
      <div>
        Object: key = {objectProp.key}, value = {objectProp.value}
      </div>
    </WrapperComponent>
  );
};
