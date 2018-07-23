import { combineReducers } from 'redux';
import { TABLE_ACTIONS } from '../actions/tableActions';

const table = (state = {}, action) => {
  switch (action.type) {
    case TABLE_ACTIONS.SET_GAME:
      return {
        state: action.payload,
      }
    default:
      return state;
  }
};

const street = (state = {flop: [], turn: [], river: []}, action) => {
  switch (action.type) {
    case TABLE_ACTIONS.SET_FLOP:
      return {
        ... state,
        flop: action.payload,
      }
    default:
      return state;
  }
};


export default combineReducers({
  table,
  street,
});
