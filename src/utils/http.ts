export const API = "https://rickandmortyapi.com/api";

export const fetchCharacters = (path?: string) => {
  return fetch(path ?? API + "/character").then((result) => result.json());
};

export const getCharacter = (id: string) =>
  fetch(API + `/character/${id}`).then((result) => result.json());
export const getFilterCharacters = (filter: string) =>
  fetch(API + "/character" + `/?name=${filter}`).then((result) =>
    result.json()
  );
