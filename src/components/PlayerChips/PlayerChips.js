import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';


const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

const PlayerChips = ({ table }) => {

  return (
    <div>
      <textarea value={table.state.playerChips}/>
    </div>
  )
}


export default compose(connect(mapStateToProps))(PlayerChips);
