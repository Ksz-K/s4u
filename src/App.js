import React, { Component } from "react";
import sudoku from "sudoku-umd";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Header />
        <h1>Aaaa</h1>
      </div>
    );
  }
}

export default App;
