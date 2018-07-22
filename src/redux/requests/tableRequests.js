import axios from 'axios';

export function newGameRequest(userInfo) {
  return axios.post('/table/newGame', {
    userId: userInfo.userId,
    difficulty: userInfo.difficultySelected,
  })

    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
};

export function firstHandRequest(newGameId) {
  return axios.post('/table/firstHand', {
    newGameId
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function getHandInfoRequest(newHandId) {
  return axios.get(`/table/getHandInfo/${newHandId}`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function getFlopAndHandRequest(newHandId) {
  return axios.get(`/table/getFlopAndHand/${newHandId}`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function playerFoldRequest(foldInfo) {
  return axios.put('/potLogic/playerFold', {
    handId: foldInfo.handId,
    pot: foldInfo.pot,
    computerChips: foldInfo.computerChips,

  })
    .then(response => response.data)
    .catch((error) => {throw error.response || error; });
}

export function postNewHandRequest(gameInfo) {
  return axios.post('/table/postNewHand', {
    gameInfo
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error});
}

export function playerRaisePreflopRequest(betInfo, gameInfo) {
  return axios.put('/potLogic/playerRaisePreflop', {
    betInfo: betInfo,
    gameInfo: gameInfo,
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
