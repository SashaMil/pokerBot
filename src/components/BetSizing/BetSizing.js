import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 500,
  },
};

const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

class BetSizing extends Component {

  state = {
    value: 3,
  };

  changeSlider = (event,  value) => {
    console.log(value);
    this.setState({value: value})
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return(
      <div className={classes.root}>
        <Slider value={value} min={10} max={1500} onChange={(event, value) => this.changeSlider(event,value)} />
      </div>
    );
  }
}

BetSizing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), connect(mapStateToProps))(BetSizing);
