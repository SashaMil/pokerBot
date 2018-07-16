import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
};

const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

class BetSizing extends Component {
  constructor() {
    super();

    this.state = {
      betAmount: 0,
    }
  }

  handChange = (event,  value) => {
    this.setState({value});
  }

  render()
    const { classes } = this.props;
    const { value } = this.state;

    return(
      <div>

      </div>
    );
  };
}

export default compose(connect(mapStateToProps))(BetSizing);
