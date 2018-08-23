import React, { Component } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";

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
        <div className='test'>Something</div>
      </ThemeProvider>
    );
  }
}

export default App;
