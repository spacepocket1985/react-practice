import { useState, useEffect } from 'react';
import { StateType } from './DidMountClass';
import { getCharacter, IdToxicRick } from '../../utils/getCharacter';
import { WrapperComponent } from '../wrapperComponent/WrapperComponent';

export const DidMountFunc: React.FC = () => {
  const [data, setData] = useState<StateType>({
    character: null,
    isLoading: true,
    error: '',
  });
  useEffect(() => {
    getCharacter(IdToxicRick)
      .then((data) => {
        setData({ character: data, isLoading: false, error: '' });
      })
      .catch((er) => {
        if (er instanceof Error)
          setData({ ...data, error: er.message, isLoading: false });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { character, error, isLoading } = data;

  const errorMsg = error ? <p>error</p> : null;
  const loading = isLoading ? <p>Loading...</p> : null;
  const content = character ? (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt="charImg" />
    </div>
  ) : null;

  return (
    <WrapperComponent indicator="ComponentDidMount (Func)">
      {errorMsg}
      {loading}
      {content}
    </WrapperComponent>
  );
};
