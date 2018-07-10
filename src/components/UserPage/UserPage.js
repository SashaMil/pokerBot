import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});





const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;
    const { classes } = this.props;


    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >

          </h1>
          <div className={classes.root}>
            <GridList cellHeight={180} className = {classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}>
                <ListSubheader component="div">Welcome, { this.props.user.userName }!</ListSubheader>
              </GridListTile>
              <GridListTile>
                <img src={require('../../../src/images/silhouette.png')}/>
              </GridListTile>
            </GridList>
          </div>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}


// this allows us to use <App /> in index.js
export default compose(withStyles(styles), connect(mapStateToProps))(UserPage);
