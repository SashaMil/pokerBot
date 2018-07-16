import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deck } from '../../redux/actions/tableActions';
import image3 from '../../../src/images/if_Avatar_500621.png';





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

    console.log('Unicorn', newDeck);

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

    finalDeck = this.shuffle(finalDeck);

    this.props.dispatch(deck(finalDeck));

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
        </div>
        <button onClick={this.createNewDeck}>Deal Cards</button>
      </div>
    );
  };
}

export default compose(connect(mapStateToProps))(Deck);
