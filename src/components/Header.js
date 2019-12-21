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
    },
    img: {
      position: "absolute",
      top: "10px",
      left: "10px",
      borderRadius: "50%",
      height: "50px",
      width: "50px"
    }
  };

  render() {
    const linkStyle = {
      color: "#fff",
      textDecoration: "none"
    };
    return (
      <header style={this.state.header}>
        <img
          style={this.state.img}
          src="https://kszk.vot.pl/kszk.png"
          alt="logo"
        />
        <h1>Sudoku Game</h1>
      </header>
    );
  }
}

export default Header;
