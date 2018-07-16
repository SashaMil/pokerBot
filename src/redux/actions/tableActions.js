export const TABLE_ACTIONS = {
  NEW_DECK: 'NEW_DECK',
  DEAL: 'DEAL',
  FLOP: 'FLOP',
  TURN: 'TURN',
  RIVER: 'RIVER',
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
  type: TABLE_ACTIONS.RIVEr,
})
