import { DataListPropsType } from '../../components/dataList/DataList';

export const codeOnProps = {
  propsGive: `// Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}

// Дочерний компонент
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}`,
  propsAccessFunc: `// Родительский компонент
const ParentComponent = () => {
  const message = "Привет, Redev!";
  return <ChildComponent message={message} />;
}

// Дочерний компонент
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
}

// либо сразу сделать деструктуризацию, ведь props это обычный объект
const ChildComponent = ({message}) => {
  return <div>{message}</div>;
}`,
  propsAccessClass: `//ParentComponent.js
import ChildComponent from './ChildComponent';

const ParentComponent2 = () => <div>parentComponent2</div>
const obj = {name:'Pasha'}

const ParentComponent = () => {
  return (
    <div>
        <ChildComponent 
					name={'abc'} 
					age={25} 
					isMan={true} 
					parentComponent2={ParentComponent2} 
					object={obj}
				/>
    </div>
  );
}

export default ParentComponent;
​
//ChildComponent.js
import React from 'react'

class ChildComponent extends React.Component{
  render(){
    return (
      <div>
        {this.props.name}
        {this.props.age}
        {this.props.isMan? "Man" : "Women"}
        {this.props.parentComponent2()}
        {this.props.object.name}
      </div>
    );
  }
}

export default ChildComponent`,
};

export const DataListProps: DataListPropsType = {
  listData: [
    'Что такое props в React? Props - это объекты, которые передаются в компоненты как параметры. Они используются для передачи данных из родительского компонента в дочерний.',
    'Как передавать props в компоненты? Props можно передавать в компоненты как атрибуты. В родительском компоненте нужно указать имя атрибута и значение, которое будет передано в дочерний компонент.',
    'Как читать props в компоненте? Props можно читать в компоненте через объект props. Этот объект содержит все переданные в компонент атрибуты.',
    'Какие данные можно передавать через props? Props можно использовать для передачи любых данных, включая строки, числа, массивы, объекты и функции.',
    'Можно ли менять пропсы? Нельзя.',
    'Что делать, если нужно изменить данные в дочернем компоненте?Если нужно изменить данные в дочернем компоненте, следует использовать состояние (state). Про него поговорим дальше. Если у тебя есть какие-либо вопросы, не стесняйся задавать их.',
  ],
  header: 'ИТОГО:',
};
