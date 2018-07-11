import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';

const mapStateToProps = state => ({
  user: state.user,
});

class Table extends Component {
  constructor() {
    super();

    this.state = {
      deck: []
    }

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
        for (let value in values) {
            this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
    }
  }

    shuffle = () => {
        const { deck } = this;
        let m = deck.length, i;

        // While there remain elements to shuffle…
        while (m) {
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this;
    }

    deal= () => {
       return this.deck.pop();
    }
}

export default Table;
