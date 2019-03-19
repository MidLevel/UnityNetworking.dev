import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import GithubCircleIcon from 'mdi-material-ui/GithubCircle';

const styles = (theme) => ({
  section: {
    paddingTop: `${theme.spacing.unit}px`,
    paddingBottom: `${theme.spacing.unit}px`
  },

  listItem: {
    paddingLeft: '0px'
  }
});

class LibraryItem extends Component {
  render() {
    const { classes, library } = this.props;

    return (
      <ListItem className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar style={{ margin: 'auto' }}>
          <Avatar alt="Logo" src={library.logo} />
        </ListItemAvatar>

        <ListItemText
          primary={library.title}
          secondary={
            <React.Fragment>
              <Typography component="span" color="textPrimary">
                {library.author}
              </Typography>

              {library.description}
            </React.Fragment>
          }
        />

        <ListItemSecondaryAction>
          <Tooltip title="GitHub">
            <IconButton href={library.href} rel="noopener noreferrer" target="_blank">
              <GithubCircleIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default withStyles(styles)(LibraryItem);
