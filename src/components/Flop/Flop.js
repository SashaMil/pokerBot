import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';
import Slide from '@material-ui/core/Slide';



const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

const Flop = ({ table }) => {

    return (
      <div>
        <Slide direction="right" in={table.street.flop[0]} mountOnEnter unmountOnExit>
          <img width='120px' src={`images/Cards/${table.street.flop[0]}.png`} />
        </Slide>
        <Slide direction="right" in={table.street.flop[1]} mountOnEnter unmountOnExit>
          <img width='120px' src={`images/Cards/${table.street.flop[1]}.png`} />
        </Slide>
        <Slide direction="right" in={table.street.flop[2]} mountOnEnter unmountOnExit>
          <img width='120px' src={`images/Cards/${table.street.flop[2]}.png`} />
        </Slide>
      </div>
    )


}


export default compose(connect(mapStateToProps))(Flop);
