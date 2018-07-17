import axios from 'axios';

export function newGameRequest() {
  return axios.get('/table/newGame')
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
};
