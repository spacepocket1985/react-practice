import { Component } from 'react';
import { EmptyPropsType } from './DidMountClass';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export type CounteState = {
  count: number;
};

export class DidUpdateClass extends Component<EmptyPropsType, CounteState> {
  constructor(props: EmptyPropsType) {
    super(props);
    this.state = { count: 0 };
  }

  onIncrease = (): void => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  onDecrease = (): void => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  componentDidUpdate(
    _prevProps: object,
    prevState: Readonly<CounteState>
  ): void {
    if (prevState.count !== this.state.count)
      console.log('ClassComponentDidUpdate => update counter!');
  }

  shouldComponentUpdate(
    _nextProps: object,
    nextState: Readonly<CounteState>
  ): boolean {
    if (nextState.count % 2 !== 0) {
      return false;
    }
    return true;
  }
  render(): JSX.Element {
    return (
      <WrapperComponent indicator="ComponentDidUpdate (Class)">
        <p className="sphere">{this.state.count}</p>
        <button onClick={this.onIncrease}>Increase</button>
        <button onClick={this.onDecrease}>Decrease</button>
      </WrapperComponent>
    );
  }
}
