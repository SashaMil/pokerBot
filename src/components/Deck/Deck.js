import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { deck } from '../../redux/actions/tableActions';

const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

class Deck extends Component {

  componentDidMount = () => {
  }

  render() {
    return(
      <div>
        <div>
          <button>Deck Image</button>
        </div>
      </div>
    );
  };
}

export default compose(connect(mapStateToProps))(Deck);
