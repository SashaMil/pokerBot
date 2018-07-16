import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';

const mapStateToProps = state => ({
  user: state.user,
});

class ComputerHand extends Component {
  constructor() {
    super();

    this.state = {
      deck: []
    }


  }

  render() {
    return(
      <div>
      </div>
    );
  };
}

export default compose(connect(mapStateToProps))(ComputerHand);
