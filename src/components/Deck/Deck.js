import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deck } from '../../redux/actions/tableActions';
import image3 from '../../../src/images/if_Avatar_500621.png';
import Hand from '../Hand/Hand';





const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

class Deck extends Component {

  componentDidMount = () => {
    this.createNewDeck();
  }

  createNewDeck = () => {

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = [[['Ace'], [1, 14]], ['2', [2]], ['3', [3]], ['4', [4]], ['5', [5]], ['6', [6]], ['7', [7]],
    ['8', [8]], ['9', [9]], ['10', [10]], ['Jack', [11]], ['Queen', [12]], ['King', [13]]];
    const imageSuits = ['H', 'S', 'C', 'D'];



    let newDeck = [];

    for (let suit in suits) {
        for (let value in values) {
            newDeck.push([`${values[value][0]} of ${suits[suit]}`, values[value][1]]);
        }
    }

    for (let x = 0; x < newDeck.length; x++) {
      if (x < 13) {
        newDeck[x].push([`../../../src/images/Cards/${x+1}H.png`])
        }
      if (x > 12 && x < 26) {
        newDeck[x].push([`../../../src/images/Cards/${x+1}S.png`])
      }
      if (x > 25 && x < 49) {
        newDeck[x].push([`../../../src/images/Cards/${x+1}C.png`])
      }
      if (x > 48){
        newDeck[x].push([`../../../src/images/Cards/${x+1}D.png`])
      }
    }

    newDeck = this.shuffle(newDeck);

    this.props.dispatch(deck(newDeck));

  }

  shuffle = (deck) => {

    let m = deck.length, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return deck;

  }

  render() {
    return(
      <div>
        <div>
          <Hand />
        </div>
        <button onClick={this.createNewDeck}>Deal Cards</button>
      </div>
    );
  };
}

export default compose(connect(mapStateToProps))(Deck);
