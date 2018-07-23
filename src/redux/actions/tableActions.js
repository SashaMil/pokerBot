export const TABLE_ACTIONS = {
  NEW_GAME: 'NEW_GAME',
  SET_GAME: 'SET_GAME',
  FIRST_HAND: 'FIRST_HAND',
  NEW_HAND: 'NEW_HAND',
  PLAYER_FOLD: 'PLAYER_FOLD',
  PLAYER_BET: 'PLAYER_BET',
  PLAYER_CALL: 'PLAYER_CALL',
  COMPUTER_DECISION: 'COMPUTER_DECISION',
  FLOP: 'FLOP',
  TURN: 'TURN',
  RIVER: 'RIVER',
};

export const newGame = (difficultySelected, userId) => ({
  type: TABLE_ACTIONS.NEW_GAME,
  payload: {
    difficultySelected,
    userId,
  }
});

export const setGame = () => ({
  type: TABLE_ACTIONS.SET_GAME,
});

export const newHand = (gameInfo) => ({
  type: TABLE_ACTIONS.NEW_HAND,
  payload: {
    gameInfo,
  }
});

export const playerFold = (gameInfo) => ({
  type: TABLE_ACTIONS.PLAYER_FOLD,
  payload: {
    gameInfo,
  }
});

export const playerBet = (betAmount, gameInfo) => ({
  type: TABLE_ACTIONS.PLAYER_BET,
  payload: {
    betAmount,
    gameInfo,
  }
});

export const playerCall = (gameInfo) => ({
  type: TABLE_ACTIONS.PLAYER_CALL,
  payload: {
    gameInfo,
  }
});

export const computerDecision = (gameInfo) => ({
  type: TABLE_ACTIONS.COMPUTER_DECISION,
  payload: {
    gameInfo,
  }
});

export const newDeck = () => ({
  type: TABLE_ACTIONS.NEW_DECK,
});

export const flop = () => ({
  type: TABLE_ACTIONS.FLOP,
});

export const turn = () => ({
  type: TABLE_ACTIONS.TURN,
});

export const river = () => ({
  type: TABLE_ACTIONS.RIVER,
});









///////
