import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';
import Deck from '../Deck/Deck';
import PlayerHand from '../PlayerHand/PlayerHand';
import ComputerHand from '../ComputerHand/ComputerHand';
import PlayerController from '../PlayerController/PlayerController';
import Street from '../Street/Street'
import { deal } from '../../redux/actions/tableActions';


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

  deal = () => {
    this.isNewGame();
    this.props.dispatch(deal());
  }

  isNewGame = () => {
    this.setState(prevState => ({
      newGame: !prevState.newGame
    }))
  }

  render() {
    return(
      <div>
        <div>
          <Deck />
        </div>
        <div>
          <PlayerHand />
        </div>
        <div>
          <ComputerHand />
        </div>
        <div>
          <Street />
        </div>
        <div>
          {this.state.newGame ? (
            <PlayerController />
          ) : (
            <div></div>
          )}
        </div>
        <div>
          {this.state.newGame ? (
            <div></div>
          ) :(
            <button onClick={this.deal}>Start Game</button>
          )}
        </div>
      </div>


    );
  };
}

export default compose(connect(mapStateToProps))(Table);
