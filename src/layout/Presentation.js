import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

import LibrariesTab from '../tabs/LibrariesTab';
import RequirementsTab from '../tabs/RequirementsTab';

const styles = (theme) => ({
  title: {
    paddingBottom: `${theme.spacing.unit}px`,

    textAlign: 'center'
  },

  avatar: {
    marginRight: 'auto',
    marginBottom: `${theme.spacing.unit / 2}px`,
    marginLeft: 'auto',
    
    width: `${theme.spacing.unit * 15}px`,
    height: `${theme.spacing.unit * 15}px`
  },

  divider: {
    marginTop: `${theme.spacing.unit * 2}px`,
    marginBottom: `${theme.spacing.unit * 2}px`,
  },

  dialogActions: {
    marginBottom: '0px',
    
    display: 'block',
    justifyContent: 'center'
  },

  bottomNavigation: {
    marginTop: `${theme.spacing.unit}px`,
  }
});

class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0
    };
  }

  changeTab = (event, value) => {
    this.setState({
      selectedTab: value
    });
  };

  render() {
    const { classes } = this.props;
    const { selectedTab } = this.state;

    return (
      <Dialog maxWidth='md' open>
        <DialogTitle className={classes.title}>
          Unity Networking

          <Typography variant="body2">
            If you want to submit an entry it has to meet the requirements specified in Requirements.
            If you believe your entry meets the requirements, <a href="">open an issue</a>.
          </Typography>
        </DialogTitle>

        <Divider className={classes.divider} light variant="middle" />

        {selectedTab === 0 && <LibrariesTab />}
        {selectedTab === 1 && <RequirementsTab />}

        <DialogActions className={classes.dialogActions}>
          <BottomNavigation className={classes.bottomNavigation} onChange={this.changeTab} showLabels value={selectedTab}>
            <BottomNavigationAction icon={<LibraryBooksIcon />} label="Libraries" />
            <BottomNavigationAction icon={<FormatListBulletedIcon />} label="Requirements" />
          </BottomNavigation>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Presentation);