import axios from 'axios';

export function newGameRequest() {
  return axios.get('/table/newGame')
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
};

export function newHandRequest() {
  return axios.get('/table/newHand')
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function playerFoldRequest() {
  return axios.get('/table/playerFold')
    .then(response => response.data)
    .catch((error) => {throw error.response || error; });
}
