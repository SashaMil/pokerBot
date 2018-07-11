import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = state => ({
  user: state.user,
});

class Stats extends Component {
  render() {
    return (
      <div>
        Hello
      </div>
    );
  };
}













export default Stats;
