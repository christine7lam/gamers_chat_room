import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";

import GamersChatRoom from "../web/containers/GamersChatRoom";

injectGlobal`
  html {
    background-color: #e6e6e6;
  }
`;

const theme = {
  main: 'mediumseagreen'
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GamersChatRoom />
      </ThemeProvider>
    );
  }
}

export default App;
