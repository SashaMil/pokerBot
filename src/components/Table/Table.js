import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';
import Deck from '../Deck/Deck';
import PlayerHand from '../PlayerHand/PlayerHand';
import ComputerHand from '../ComputerHand/ComputerHand';
import { deal } from '../../redux/actions/tableActions';


const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

class Table extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {

  }

  test = () => {
    this.deal();
    console.log(this.props.table);
  }

  deal = () => {
     this.props.dispatch(deal());
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
        <button onClick={this.test}>Testing</button>
      </div>


    );
  };
}

export default compose(connect(mapStateToProps))(Table);
