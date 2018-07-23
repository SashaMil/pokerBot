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

const Pot = ({ table }) => {

  return (
    <div>
      <p style={{color: 'white', right: '300px', top: '600px', position: 'absolute'}}>Pot: {table.table.state.pot}</p>
    </div>
  )

}

export default compose(connect(mapStateToProps))(Pot);
