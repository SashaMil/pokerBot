import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';
import Deck from '../Deck/Deck';
import PlayerHand from '../PlayerHand/PlayerHand';
import PlayerChips from '../PlayerChips/PlayerChips';
import ComputerHand from '../ComputerHand/ComputerHand';
import ComputerChips from '../ComputerChips/ComputerChips';
import PlayerController from '../PlayerController/PlayerController';
import Street from '../Street/Street'
import Pot from '../Pot/Pot';
import { newGame } from '../../redux/actions/tableActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { computerPreflopAction } from '../../redux/actions/tableActions';




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
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch(newGame('Normal', this.props.user.userId));
  }

  callComputerActions = () => {
    this.props.dispatch(computerPreflopAction(this.props.table.state));
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.table.state !== prevProps.table.state && !this.props.table.state.player_action) {
      this.props.dispatch(computerPreflopAction(this.props.table.state));
    }
  }






  render() {
    return(
      <div>
          {this.props.table.state ? (
            <div>
              <div>
                <ComputerHand />
              </div>
              <div>
                <ComputerChips />
              </div>
              <div>
                <Street />
              </div>
              <div>
                <Pot />
              </div>
              <div>
                <PlayerHand />
              </div>
              <div>
                <PlayerChips />
              </div>
              <div>
                <PlayerController />
              </div>
            </div>
          ) : (
            null
          )}
      </div>
    );
  };
}

export default compose(connect(mapStateToProps))(Table);
