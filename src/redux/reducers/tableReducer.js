import { combineReducers } from 'redux';
import { TABLE_ACTIONS } from '../actions/tableActions';

const deck = (state = {}, action) => {
  switch (action.type) {
    case TABLE_ACTIONS.NEW_DECK:
      return {
        ...state,
        deck: action.payload.newDeck,
      };
    default:
      return state;
  }
};

const test = (state = {}, action) => {
  switch (action.type) {
    case TABLE_ACTIONS.NEW_DECK:
      return {
        ...state,
        deck: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  deck,
  test,
});
