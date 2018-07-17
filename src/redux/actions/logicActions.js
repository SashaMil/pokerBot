export const LOGIC_ACTIONS = {
  COMPUTER_CHECK: 'COMPUTER_CHECK',
  COMPUTER_BET: 'COMPUTER_BET',
  COMPUTER_CALL: 'COMPUTER_CALL',
  COMPUTER_RAISE: 'COMPUTER_RAISE',
  PLAYER_CHECK: 'PLAYER_CHECK',
  PLAYER_BET: 'PLAYER_BET',
  PLAYER_CALL: 'PLAYER_CALL',
  PLAYER_RAISE: 'PLAYER_RAISE',
  SHOWDOWN: 'SHOWDOWN',
};

export const computerCheck = () => ({
  type: LOGIC_ACTIONS.COMPUTER_CHECK,
});

export const computerBet = () => ({
  type: LOGIC_ACTIONS.COMPUTER_BET,
});

export const computerCall = () => ({
  type: LOGIC_ACTIONS.COMPUTER_CALL,
});

export const computerRaise = () => ({
  type: LOGIC_ACTIONS.COMPUTER_RAISE,
});

export const playerCheck = () => ({
  type: LOGIC_ACTIONS.PLAYER_CHECK,
});

export const playerBet = () => ({
  type: LOGIC_ACTIONS.PLAYER_BET,
});

export const playerCall = () => ({
  type: LOGIC_ACTIONS.PLAYER_CALL,
});

export const playerRaise = () => ({
  type: LOGIC_ACTIONS.PLAYER_RAISE,
});

export const
