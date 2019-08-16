import React from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';

import Hotel from "./components/Hotel";


const theme = createMuiTheme({
  palette: {
    primary: { main: '#895e94' },
    secondary: { main: '#d3bcd6' }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Hotel />
    </MuiThemeProvider>
  );
}

export default App;
