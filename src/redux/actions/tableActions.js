export const TABLE_ACTIONS = {
  NEW_GAME: 'NEW_GAME',
  SET_GAME: 'SET_GAME',
  FIRST_HAND: 'FIRST_HAND',
  NEW_HAND: 'NEW_HAND',
  PLAYER_FOLD: 'PLAYER_FOLD',
  PLAYER_RAISE_PREFLOP: 'PLAYER_RAISE_PREFLOP',
  FLOP: 'FLOP',
  TURN: 'TURN',
  RIVER: 'RIVER',
  PLAYER_FOLD: 'PLAYER_FOLD',
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

export const newHand = (currentGameInfo) => ({
  type: TABLE_ACTIONS.NEW_HAND,
  payload: {
    currentGameInfo,
  }
});

export const playerFold = (handId, pot, computer_chips) => ({
  type: TABLE_ACTIONS.PLAYER_FOLD,
  payload: {
    handId,
    pot,
    computer_chips,
  }
});

export const playerRaisePreflop = (chips, currentGameInfo) => ({
  type: TABLE_ACTIONS.PLAYER_RAISE_PREFLOP,
  payload: {
    chips,
    currentGameInfo
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
})

export const river = () => ({
  type: TABLE_ACTIONS.RIVER,
})
