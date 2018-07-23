import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import Flop from '../Flop/Flop';
import Turn from '../Turn/Turn';
import River from '../River/River';

const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

class Street extends Component {
  constructor() {
    super();

    this.state = {
      flop: false,
      turn: false,
      river: false,
    }
  }

  isFlop = () => {

  }

  render() {

    return(
      <div>
        <div>
            <div>
              {this.props.table.table.state.flop_card_1 ? (
                <Flop />
              ) :(
                <div></div>
              )}
              {this.state.turn ? (
                <Turn />
              ) :(
                <div></div>
              )}
              {this.state.river ? (
                <River />
              ) :(
                <div></div>
              )}
            </div>
          ) :(
            <div>
            </div>
          )}
        </div>
      </div>
    );
  };
}

export default compose(connect(mapStateToProps))(Street);
