import './App.css'
import React from 'react';
import DesktopLayout from './layouts/DesktopLayout'
import Router from './Router'
import { makeStyles } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";


const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1400,
      xl: 1920,
    },
  },
})

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  }
}))
const App = () => {
  const classes = useStyle()

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <BrowserRouter>
          <DesktopLayout>
            <Router />
          </DesktopLayout>
        </BrowserRouter>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
