export type Character = {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
};

export type Planet = {
  id: number;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
};

export type CharacterDetails = Character & {
  originPlanet?: Planet;
};

export type PlanetDetails = Planet & {
  characters?: Character[];
};

export type PaginatedResponse<T> = {
  items: T[];
};
