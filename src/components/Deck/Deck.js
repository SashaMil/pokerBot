import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';
import Hand from '../Hand/Hand';


const mapStateToProps = state => ({
  user: state.user,
});

class Deck extends Component {
  constructor() {
    super();

    this.state = {
      deck: []
    }

  }

  render() {
    return(
      <div>
        <Hand />
      </div>


    );
  };
}

export default compose(connect(mapStateToProps))(Deck);
