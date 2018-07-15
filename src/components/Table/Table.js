import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom';
import Deck from '../Deck/Deck';



const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

class Table extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {

  }

  test = () => {
    console.log('hello');
    console.log(this.props.user);
    console.log(this.props.table.deck.deck);
  }

  deal = () => {
     return this.deck.pop();
  }

  render() {
    return(
      <div>
        <div>
          <Deck />
        </div>
        <button onClick={this.test}>Testing</button>
      </div>


    );
  };
}

export default compose(connect(mapStateToProps))(Table);
