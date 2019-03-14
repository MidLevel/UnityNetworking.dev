import React, { Component } from 'react';

import { createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import teal from '@material-ui/core/colors/teal';
import pink from '@material-ui/core/colors/pink';

import networksScatteringImage from './images/backgrounds/networks-scattering.gif';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink
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

        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
