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

export function postActionTypeRequest(actionType, id) {
  return axios.put('/potLogic/computerAction', {
    actionType,
    id,
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

export function getFlopAndHandInfoRequest(newHandId) {
  return axios.get(`/table/getFlopAndHandInfo/${newHandId}`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function getTurnAndHandInfoRequest(newHandId) {
  return axios.get(`/table/getTurnAndHandInfo/${newHandId}`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function playerFoldRequest(gameInfo) {
  return axios.put('/potLogic/playerFold', {
    gameInfo: gameInfo,
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

export function playerBetRequest(betAmount, gameInfo) {
  return axios.put('/potLogic/playerBet', {
    betAmount: betAmount,
    gameInfo: gameInfo,
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error});
}

export function playerCallRequest(gameInfo) {
  return axios.put('/potLogic/playerCall', {
    gameInfo
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error});
}

export function computerActionRequest(handId) {
  return axios.get(`/computerAction/${handId}`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function computerActionStreetRequest(gameInfo, street) {
  return axios.post('/computerAction/', {
    gameInfo,
    street,
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });

}

export function computerCallRequest(gameInfo) {
  return axios.put('/potLogic/computerCall', {
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

export function computerBetRequest(betAmount, gameInfo) {
  return axios.put('/potLogic/computerBet', {
    betAmount: betAmount,
    gameInfo: gameInfo,
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error });
}





////////////
