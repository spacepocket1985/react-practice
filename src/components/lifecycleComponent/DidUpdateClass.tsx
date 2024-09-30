import { Component } from 'react';
import { EmptyPropsType } from './DidMountClass';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';
import { Counter, CounterAction } from '../counter/Counter';

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

  onCounterClick = (type: CounterAction): void => {
    switch (type) {
      case CounterAction.Increase:
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        break;
      case CounterAction.Decrease:
        this.setState((prevState) => ({ count: prevState.count - 1 }));
        break;
      default:
        break;
    }
  };

  componentDidUpdate(): void {
    console.log('ClassComponentDidUpdate => update counter!');
  }

  shouldComponentUpdate(
    _nextProps: object,
    nextState: Readonly<CounteState>
  ): boolean {
    if (this.state.count === nextState.count) {
      return false;
    }

    if (nextState.count % 2 !== 0) {
      return false;
    }
    return true;
  }
  render(): JSX.Element {
    return (
      <WrapperComponent indicator="ComponentDidUpdate (Class)">
        <Counter count={this.state.count} action={this.onCounterClick} />
      </WrapperComponent>
    );
  }
}
