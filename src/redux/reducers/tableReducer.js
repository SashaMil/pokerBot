import { combineReducers } from 'redux';
import { TABLE_ACTIONS } from '../actions/tableActions';

const cards = (state = {}, action) => {

  switch (action.type) {
    case TABLE_ACTIONS.NEW_DECK:

      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = [[['Ace'], [1, 14]], ['2', [2]], ['3', [3]], ['4', [4]], ['5', [5]], ['6', [6]], ['7', [7]],
      ['8', [8]], ['9', [9]], ['10', [10]], ['Jack', [11]], ['Queen', [12]], ['King', [13]]];
      const imageSuits = ['H', 'S', 'C', 'D'];

      let shuffle = (deck) => {

        let m = deck.length, i;

        while (m) {
          i = Math.floor(Math.random() * m--);
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return deck;

      }

      let newDeck = [];

      for (let suit in suits) {
          for (let value in values) {
              newDeck.push([`${values[value][0]} of ${suits[suit]}`, values[value][1]]);
          }
      }

      let allHearts = newDeck.filter(x => x[0].includes('Hearts'));
      for (let x = 0; x < allHearts.length; x++) {
        allHearts[x].push([`images/Cards/${x+1}H.png`]);
      }

      let allSpades = newDeck.filter(x => x[0].includes('Spades'));
      for (let x = 0; x < allSpades.length; x++) {
        allSpades[x].push([`images/Cards/${x+1}S.png`]);
      }

      let allClubs = newDeck.filter(x => x[0].includes('Clubs'));
      for (let x = 0; x < allClubs.length; x++) {
        allClubs[x].push([`images/Cards/${x+1}C.png`]);
      }

      let allDiamonds = newDeck.filter(x => x[0].includes('Diamonds'));
      for (let x = 0; x < allDiamonds.length; x++) {
        allDiamonds[x].push([`images/Cards/${x+1}D.png`]);
      }

      let finalDeck = allHearts.concat(allSpades, allClubs, allDiamonds);

      finalDeck = shuffle(finalDeck);



      return {
        ...state,
        deck: finalDeck,
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
