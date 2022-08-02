export const API = "https://rickandmortyapi.com/api";

export const fetchCharacters = (path?: string) => {
  if (!path) {
    return fetch(API + "/character").then((result) => result.json());
  }
  return fetch(API + "/character" + `?${path}`).then((result) => result.json());
};

export const fetchNewPage = (path: string) => {
  return fetch(path).then((result) => result.json());
};

export const getCharacter = (id: string) => {
  return fetch(API + `/character/${id}`).then((result) => result.json());
};
