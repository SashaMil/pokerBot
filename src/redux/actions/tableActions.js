export const TABLE_ACTIONS = {
  NEW_DECK: 'NEW_DECK',
  DEAL: 'DEAL',
};

export const deck = (newDeck) => ({
  type: TABLE_ACTIONS.NEW_DECK,
  payload: {
    newDeck
  },
});

export const deal = () => ({
  type: TABLE_ACTIONS.DEAL,
});
