import { WrapperComponent } from '../wrapperComponent/WrapperComponent';
import './ArrayComponent.css';

type ArrayComponentProps = { arrayProp: string[] };

export const ArrayComponent: React.FC<ArrayComponentProps> = ({
  arrayProp,
}) => {
  return (
    <WrapperComponent indicator="006 - ArrayComponent">
      <div className="arrWrapper">
        <p>Array: </p>
        <ul>
          {arrayProp.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </WrapperComponent>
  );
};
