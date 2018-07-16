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
    let card1 = require(`${table.cards.playerHand[0][2]}`);
    return (
      <div>
        <img src={card1} />
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
