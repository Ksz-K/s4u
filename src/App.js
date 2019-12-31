import React, { Component } from "react";
import Header from "./components/Header";
import Controls from "./components/Controls";
import GameBoard from "./components/GameBoard";

import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      puzzleBoard: null,
      solvedBoard: null
    };
  }

  digitInputed = e => {
    const { id, value } = e.target;
    if (value > 0 && value < 10) {
      const updateFromPlayer = [...this.state.puzzleBoard];
      updateFromPlayer[id] = value.toString();
      this.setState({ puzzleBoard: updateFromPlayer });
    }
  };

  fromControls = (puzzleBoard, solvedBoard) => {
    this.setState({
      puzzleBoard,
      solvedBoard
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Controls gameState={this.fromControls} />
        <GameBoard
          puzzleBoard={this.state.puzzleBoard}
          solvedBoard={this.state.solvedBoard}
          digitInputed={this.digitInputed}
        />
      </div>
    );
  }
}

export default App;
