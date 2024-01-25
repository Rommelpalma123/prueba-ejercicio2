import axios from 'axios';

export const getPokemon = (url: any) => {
  return new Promise((res, rej) =>
    axios
      .get(url)
      .then((response) => res(response.data))
      .catch((error) => rej(error))
  );
};
