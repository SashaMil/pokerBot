export const TABLE_ACTIONS = {
  NEW_GAME: 'NEW_GAME',
  SET_GAME: 'SET_GAME',
  NEW_DECK: 'NEW_DECK',
  FLOP: 'FLOP',
  TURN: 'TURN',
  RIVER: 'RIVER',
  BET: 'BET',
};

export const newGame = () => ({
  type: TABLE_ACTIONS.NEW_GAME,
});

export const setGame = () => ({
  type: TABLE_ACTIONS.SET_GAME,
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

export const bet = (chips) => ({
  type: TABLE_ACTIONS.BET,
  payload: {
    chips,
  }
})
