/* eslint-disable */
import React, { Component } from "react";

class Header extends Component {
  state = {
    header: {
      display: "block",
      background: "#333",
      color: "#fff",
      textAlign: "center",
      padding: "10px",
      position: "relative"
    }
  };

  render() {
    return (
      <header style={this.state.header}>
        <img src="https://kszk.vot.pl/kszk.png" alt="logo" />
        <h1>Sudoku Game</h1>
      </header>
    );
  }
}

export default Header;
