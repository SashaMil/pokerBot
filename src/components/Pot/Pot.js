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

class Pot extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <input value={this.props.table.pot.pot}></input>
      </div>
    );
  }
}

export default compose(connect(mapStateToProps))(Pot);
