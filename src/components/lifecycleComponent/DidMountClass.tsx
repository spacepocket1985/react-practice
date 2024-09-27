import { Component } from 'react';
import { Character, getCharacter } from '../../utils/getCharacter';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export type EmptyPropsType = object;

export type StateType = {
  character: Character | null;
  isLoading: boolean;
  error: string;
};

export class DidMountClass extends Component<EmptyPropsType, StateType> {
  constructor(props: EmptyPropsType) {
    super(props);
    this.state = {
      character: null,
      isLoading: true,
      error: '',
    };
  }
  componentDidMount(): void {
    getCharacter('361')
      .then((data) => {
        this.setState({ character: data, isLoading: false, error: '' });
      })
      .catch((er) => {
        if (er instanceof Error)
          this.setState({ ...this.state, error: er.message, isLoading: false });
      });
  }

  render(): JSX.Element {
    const { character, error, isLoading } = this.state;

    const errorMsg = error ? <p>error</p> : null;
    const loading = isLoading ? <p>Loading...</p> : null;
    const content = character ? (
      <div>
        <h3>{character.name}</h3>
        <img src={character.image} alt="charImg" />
      </div>
    ) : null;

    return (
      <WrapperComponent indicator="ComponentDidMount (Class)">
        {errorMsg}
        {loading}
        {content}
      </WrapperComponent>
    );
  }
}
