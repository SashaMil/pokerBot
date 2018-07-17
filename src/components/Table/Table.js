import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';
import Deck from '../Deck/Deck';
import PlayerHand from '../PlayerHand/PlayerHand';
import ComputerHand from '../ComputerHand/ComputerHand';
import PlayerController from '../PlayerController/PlayerController';
import Street from '../Street/Street'
import Pot from '../Pot/Pot';
import { newGame } from '../../redux/actions/tableActions';


const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

class Table extends Component {
  constructor() {
    super();

    this.state = {
      newGame: false,
    }
  }

  componentDidMount = () => {

  }

  newGame = () => {
    console.log('hello');
    this.props.dispatch(newGame());
  }



  render() {
    return(
      <div>
        <button onClick={this.newGame}>Start Game</button>
      </div>
    );
  };
}

export default compose(connect(mapStateToProps))(Table);
