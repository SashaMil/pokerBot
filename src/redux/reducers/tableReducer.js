import { combineReducers } from 'redux';
import { TABLE_ACTIONS } from '../actions/tableActions';

const cards = (state = {}, action) => {
  switch (action.type) {
    case TABLE_ACTIONS.NEW_DECK:
      return {
        ...state,
        deck: action.payload.newDeck,
      };
    case TABLE_ACTIONS.DEAL:
      let reduceDeck = state.deck;
      let playerCard1 = reduceDeck.pop();
      let computerCard1 = reduceDeck.pop();
      let playerCard2 = reduceDeck.pop();
      let computerCard2 = reduceDeck.pop();
      state.playerHand = [playerCard1, playerCard2];
      state.computerHand = [computerCard1, computerCard2];
      return {
        ... state,
        deck: reduceDeck,
      }



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
  cards,
  test,
});
