import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import TopContainer from "./components/top-container";
import Side from "./components/sidebar";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopContainer />
          <Side />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
