const _ApiEndpoint = 'https://rickandmortyapi.com/api/character/';

type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`${_ApiEndpoint}${id}`);

  if (!response.ok) {
    throw new Error(
      `Could not fetch ${_ApiEndpoint}${id}, status: ${response.status}`
    );
  }
  const data: Character = await response.json();
  return data;
};
