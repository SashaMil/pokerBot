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
      <textarea value={table.table.state.computer_chips}/>
    </div>
  )
}


export default compose(connect(mapStateToProps))(ComputerChips);
