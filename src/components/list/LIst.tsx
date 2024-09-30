
import { ItemType } from '../../App';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';
import './LIst.css';

type ListPropsType = { data: ItemType[]; onUpdateItem: (id: string) => void };

export const List: React.FC<ListPropsType> = ({ data, onUpdateItem }) => {
  const handleUpdateItem = (id: string): void => {
    onUpdateItem(id)
  };

  const rederData = data.map((item) => {

    return (
      <li key={item.id} className="listLine">
        <span>name:</span>
        {item.name}
        <button onClick={()=>{handleUpdateItem(item.id)}} className="sphere">
          !!!
        </button>
      </li>
    );
  });
  return (
    <WrapperComponent indicator="Item list">
      <ul>{rederData}</ul>
    </WrapperComponent>
  );
};
