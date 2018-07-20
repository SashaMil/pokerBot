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

export function firstHandRequest(newGameId) {
  return axios.post('/table/firstHand', {
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

export function playerFoldRequest(foldInfo) {
  return axios.put('/potLogic/playerFold', {
    foldInfo,
  })
    .then(response => response.data)
    .catch((error) => {throw error.response || error; });
}

export function postNewHandRequest(currentGameInfo) {
  return axios.post('/table/postNewHand', {
    currentGameInfo
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error});
}

export function playerRaisePreflopRequest(betInfo) {
  return axios.put('/potLogic/playerRaisePreflop', {
    betInfo
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error});
}

export function computerPreflopRequest(playerBetInfo, handId, action) {
  return axios.post('/computerLogic/computerPreflop', {
    playerBetInfo,
    handId,
    action,
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error});
}

export function computerCallPreflopRequest(computerAction) {
  return axios.put('/potLogic/computerCallPreflop', {
    computerAction,
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error});
}





////////////
