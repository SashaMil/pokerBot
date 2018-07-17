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
      <img width='200px' src={table.state.playerHand[0][2]} />
      <img width='200px' src={table.state.playerHand[1][2]} />
    </div>
  )


}


export default compose(connect(mapStateToProps))(PlayerHand);
