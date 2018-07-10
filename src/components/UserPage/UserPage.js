import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import image1 from '../../../src/images/if_Gear_599838.png';
import image2 from '../../../src/images/if_Settings_2_500624.png';
import image3 from '../../../src/images/if_Avatar_500621.png';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 250,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    top: 100,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },

});

const images = [
  {
    url: image1,
    title: 'Stats',
    width: '33.3%',
  },
  {
    url: image2,
    title: 'Preferences',
    width: '33.3%',
  },
  {
    url: image3,
    title: 'New Game',
    width: '33.3%',
  },
];





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


    return (
      <div className={classes.root}>
        {images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subheading"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
      <div className={classes.root2}>
        {images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subheading"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    );
  }



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
