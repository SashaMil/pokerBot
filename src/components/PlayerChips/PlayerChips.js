import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';


const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

let color = 'white';

const PlayerChips = ({ table }) => {

  return (
    <div>
      <p style={{color: 'white'}}>Your Bet: {table.table.state.player_bet}</p>
      <p style={{color: 'white'}}>Remaining Chips: {table.table.state.player_chips}</p>
    </div>
  )
}


export default compose(connect(mapStateToProps))(PlayerChips);
