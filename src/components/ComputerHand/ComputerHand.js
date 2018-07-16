import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';


const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

const PlayerHand = ({ table }) => {

  if (table.cards.playerHand !== undefined) {
    return (
      <div>
        <img width='200px' src={'images/Cards/gray_back.png'} />
        <img width='200px' src={'images/Cards/gray_back.png'} />
      </div>
    )
  }
  return (
    <div>
      <button>Howdy</button>
    </div>
  )

}


export default compose(connect(mapStateToProps))(PlayerHand);
