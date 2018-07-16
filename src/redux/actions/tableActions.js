export const TABLE_ACTIONS = {
  NEW_DECK: 'NEW_DECK',
  DEAL: 'DEAL',
  FLOP: 'FLOP',
  TURN: 'TURN',
  RIVER: 'RIVER',
  BET: 'BET',
};

export const deck = () => ({
  type: TABLE_ACTIONS.NEW_DECK,
});

export const deal = () => ({
  type: TABLE_ACTIONS.DEAL,
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
