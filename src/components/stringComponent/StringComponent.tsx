import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

type StringComponentPropsType = { stringProp: string };

export const StringComponent: React.FC<StringComponentPropsType> = ({
  stringProp,
}) => {
  return (
    <WrapperComponent indicator="002 - StringComponent">
      <div>String: {stringProp}</div>
    </WrapperComponent>
  );
};
