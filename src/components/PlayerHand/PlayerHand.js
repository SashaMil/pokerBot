import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';


const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

const PlayerHand = ({ table }) => {

  return (
    <div>
      <img width='120px' src={`images/Cards/${table.state[0].player_card_1}.png`} />
      <img width='120px' src={`images/Cards/${table.state[0].player_card_2}.png`} />
    </div>
  )


}


export default compose(connect(mapStateToProps))(PlayerHand);
