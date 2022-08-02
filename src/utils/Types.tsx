export type Personaje = {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
  species: string;
};

export type Search = {
  name?: string;
  status?: string;
  gender?: string;
};
