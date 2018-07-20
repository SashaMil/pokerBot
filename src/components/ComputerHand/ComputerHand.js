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
      <img width='120px' src={'images/Cards/purple_back.png'} />
      <img width='120px' src={'images/Cards/purple_back.png'} />
    </div>
  )
}


export default compose(connect(mapStateToProps))(PlayerHand);
