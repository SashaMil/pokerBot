import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';
import Deck from '../Deck/Deck';


const mapStateToProps = state => ({
  user: state.user,
});

class Table extends Component {
  constructor() {
    super();

    this.state = {
      deck: []
    }


  }

  componentDidMount = () => {
    this.createNewDeck();
  }

  createNewDeck = () => {
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    let newDeck = [];

    for (let suit in suits) {
        for (let value in values) {
          newDeck.push(`${values[value]} of ${suits[suit]}`);
        }
    }

    this.shuffle(newDeck);

    this.setState({deck: [... newDeck]});
    console.log(this.state.deck);
  }

  shuffle = (deck) => {
      let m = deck.length, i;

      // While there remain elements to shuffle…
      while (m) {
          i = Math.floor(Math.random() * m--);
          // And swap it with the current element.
          [deck[m], deck[i]] = [deck[i], deck[m]];
      }

      return this;
  }

  deal = () => {
     return this.deck.pop();
  }

  render() {
    return(
      <div>
        <Deck />
          <div>{this.state.deck}</div>
      </div>


    );
  };
}

export default compose(connect(mapStateToProps))(Table);
