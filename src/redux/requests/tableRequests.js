import axios from 'axios';

export function newGameRequest(userInfo) {
  return axios.post('/table/newGame', {
    // difficulty: 'Normal',
    // userId:
    userId: userInfo.userId,
    difficulty: userInfo.difficultySelected,
  })

    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
};

export function newHandRequest(newGameId) {
  return axios.post('/table/newHand', {
    id: newGameId
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function getHandRequest(newHandId) {
  return axios.get(`/table/getHand/${newHandId}`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function playerFoldRequest() {
  return axios.get('/table/playerFold')
    .then(response => response.data)
    .catch((error) => {throw error.response || error; });
}
