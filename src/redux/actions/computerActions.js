export const COMPUTER_ACTIONS = {
  CHECK: 'CHECK',
  BET: 'BET',
  CALL: 'CALL',
  RAISE: 'RAISE',
};

export const check = () => ({
  type: TABLE_ACTIONS.CHECK,
});

export const bet = () => ({
  type: TABLE_ACTIONS.BET,
});

export const call = () => ({
  type: TABLE_ACTIONS.RAISE,
});

export const raise = () => ({
  type: TABLE_ACTIONS.CALL,
});
