import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";

import GamersChatRoom from "../web/containers/GamersChatRoom";

injectGlobal`
  html {
    background-color: #c2c2f0;
  }
`;

const greyTheme = {
  themeName: 'Grey Theme',
  themeFile: 'greyTheme.json',
  palette: {
      primary1Color: '#848484',
      alternateTextColor: '#4a4a4a',
      canvasColor: '#616161',
      textColor: '#bdbdbd',
      secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
      disabledColor: '#757575',
      accent1Color: '#607d8b',
  },
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={greyTheme}>
        <GamersChatRoom />
      </ThemeProvider>
    );
  }
}

export default App;
