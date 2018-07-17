import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';
import { bet } from '../../redux/actions/tableActions';

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
    value: 0,
  };

  changeSlider = (event,  value) => {
    this.setState({value: value});
  };

  handleInput = (event, input) => {
    this.setState({value: input});
  }

  bet = () => {
    this.props.dispatch(bet(this.state.value));
    this.setState({value: 0});
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return(
      <div className={classes.root}>
        <Slider value={value} min={10} max={1500} step={1} onChange={(event, value) => this.changeSlider(event,value)} />
        <input value={this.state.value} />
        <Button variant="contained" color="primary" className={styles.button} onClick={this.bet}>
          Bet
        </Button>
        <Button variant="contained" color="primary" className={styles.cssRoot} onClick={this.bet}>
          Raise
        </Button>
      </div>
    );
  }
}

export default compose(withStyles(styles), connect(mapStateToProps))(BetSizing);
