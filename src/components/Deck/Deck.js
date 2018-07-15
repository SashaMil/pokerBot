import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Hand from '../Hand/Hand';
import { deck } from '../../redux/actions/tableActions';



const mapStateToProps = state => ({
  user: state.user,
  // deck: state.deck,
});

class Deck extends Component {

  componentDidMount = () => {
    this.createNewDeck();
  }

  createNewDeck = () => {

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = [[['Ace'], [1, 14]], ['2', [2]], ['3', [3]], ['4', [4]], ['5', [5]], ['6', [6]], ['7', [7]], ['8', [8]], ['9', [9]], ['10', [10]], ['Jack', [11]], ['Queen', [12]], ['King', [13]]];

    let newDeck = [];

    for (let suit in suits) {
        for (let value in values) {
            newDeck.push([`${values[value][0]} of ${suits[suit]}`, values[value][1]]);
        }
    }

    newDeck = this.shuffle(newDeck);

    console.log(newDeck);
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
        <button onClick={this.createNewDeck}>Deal Cards</button>
      </div>
    );
  };
}

export default compose(connect(mapStateToProps))(Deck);
