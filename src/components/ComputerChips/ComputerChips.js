import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';


const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

const ComputerChips = ({ table }) => {

  return (
    <div>
      <p style={{color: 'white'}}>Opponent Bet: {table.table.state.computer_bet}</p>
      <p style={{color: 'white'}}>Opponent Chips: {table.table.state.computer_chips}</p>
    </div>
  )
}


export default compose(connect(mapStateToProps))(ComputerChips);
