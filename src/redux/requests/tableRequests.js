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

export function playerBetRequest(betInfo, gameInfo) {
  return axios.put('/potLogic/playerBet', {
    betInfo: betInfo,
    gameInfo: gameInfo,
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error});
}

export function computerPreflopDecisionRequest(playerBetInfo, handId, playerAction) {
  return axios.post('/computerLogic/computerPreflop', {
    playerBetInfo: playerBetInfo,
    handId: handId,
    playerAction: playerAction,
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error});
}

export function computerCallRequest(betInfo, gameInfo) {
  return axios.put('/potLogic/computerCall', {
    betInfo: betInfo,
    gameInfo: gameInfo,
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error});
}

export function computerFoldRequest(foldInfo) {
  return axios.put('/potLogic/computerFold', {
    handId: foldInfo.id,
    pot: foldInfo.pot,
    playerChips: foldInfo.player_chips,
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error });
}

export function computerBetRequest(betInfo, gameInfo) {
  return axios.put('/potLogic/computerFold', {
    betInfo: betInfo,
    gameInfo: gameInfo,
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error });
}





////////////
