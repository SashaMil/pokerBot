import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import BetSizing from '../BetSizing/BetSizing';
import { playerFold } from '../../redux/actions/tableActions';
import { newHand } from '../../redux/actions/tableActions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';


const styles = theme => ({
  button: {
    margin: 'theme.spacing.unit',
  },
  extendedIcon: {
    marginRight: '50px',
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }
});

const mapStateToProps = state => ({
  user: state.user,
  table: state.table,
});

class PlayerController extends Component {
  constructor() {
    super();
  }

  fold = () => {
    this.props.dispatch(playerFold(this.props.table.state.id, this.props.table.state.pot, this.props.table.state.computer_chips));
  }

  componentDidMount = () => {
  }

  render() {
    return(
      <div>
          {this.props.table.state.player_sb ? (
            <div>
              <Button onClick={this.fold} variant="contained" color="secondary" className={styles.button}>
                Fold
              </Button>
              <Button variant="contained" color="default" className={styles.button}>
                Call
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={this.fold} variant="contained" color="secondary" className={styles.button}>
                Fold
              </Button>
              <Button variant="contained" color="default" className={styles.button}>
                Check
              </Button>
            </div>
          )}
          <div>
            <BetSizing />
          </div>
      </div>
    );
  };
}
  export default compose(withStyles(styles),connect(mapStateToProps))(PlayerController);
