import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';
import Slide from '@material-ui/core/Slide';


const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

const PlayerHand = ({ table }) => {

  return (
    <div>
      <Slide direction="right" in={table.state.player_card_1} mountOnEnter unmountOnExit>
        <img width='120px' src={`images/Cards/${table.state.player_card_1}.png`} />
      </Slide>
      <Slide direction="right" in={table.state.player_card_1} mountOnEnter unmountOnExit>
        <img width='120px' src={`images/Cards/${table.state.player_card_2}.png`} />
      </Slide>
    </div>
  )


}


export default compose(connect(mapStateToProps))(PlayerHand);
