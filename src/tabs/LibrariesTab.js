import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import DialogContent from '@material-ui/core/DialogContent';

import List from '@material-ui/core/List';

import LibraryItem from '../layout/LibraryItem';

import libraries from '../data/libraries.json';

const styles = (theme) => ({
  section: {
    paddingTop: `${theme.spacing.unit}px`,
    paddingBottom: `${theme.spacing.unit}px`
  },

  listItem: {
    paddingLeft: '0px'
  }
});

class LibrariesTab extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DialogContent>
        <List>
          {libraries.map((library, index) => {
            return (
              <LibraryItem key={index} library={library} />
            );
          })}
        </List>
      </DialogContent>
    );
  }
}

export default withStyles(styles)(LibrariesTab);
