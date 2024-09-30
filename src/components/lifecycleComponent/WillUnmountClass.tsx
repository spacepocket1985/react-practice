import { Component } from 'react';
import { EmptyPropsType } from './DidMountClass';
import { CounteState } from './DidUpdateClass';

export class WillUnmountClass extends Component<EmptyPropsType, CounteState> {
  private timerId: number | undefined;
  constructor(props: EmptyPropsType) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount(): void {
    this.startTimer();
  }

  componentWillUnmount(): void {
    this.stopTimer();
    console.log('ClassComponentWillUnmount');
  }

  startTimer(): void {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  stopTimer(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = undefined; 
    }
  }

  render(): JSX.Element {
    return (

        <div>{this.state.count}</div>

    );
  }
}
