import React, { Component } from 'react';

import { createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import deepOrange from '@material-ui/core/colors/deepOrange';
import cyan from '@material-ui/core/colors/cyan';

import Presentation from './layout/Presentation';

import networksScatteringImage from './images/backgrounds/networks-scattering.gif';

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: cyan
  },

  typography: {
    useNextVariants: true
  }
});

const styles = (theme) => ({
  background: {
    minHeight: `100vh`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.background} style={{ backgroundImage: `url(${networksScatteringImage})` }}>
          <Presentation />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
