export const TABLE_ACTIONS = {
  NEW_GAME: 'NEW_GAME',
  SET_GAME: 'SET_GAME',
  NEW_HAND: 'NEW_HAND',
  NEW_DECK: 'NEW_DECK',
  FLOP: 'FLOP',
  TURN: 'TURN',
  RIVER: 'RIVER',
  PLAYER_BET: 'PLAYER_BET',
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

// export const newHand = () => ({
//   type: TABLE_ACTIONS.NEW_HAND,
// });

export const playerFold = () => ({
  type: TABLE_ACTIONS.PLAYER_FOLD,
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

export const playerBet = (chips) => ({
  type: TABLE_ACTIONS.BET,
  payload: {
    chips,
  }
})
