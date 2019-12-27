import React, { Component } from "react";
import { puzzleBoard, solvedBoard } from "./components/Engine";
import Header from "./components/Header";
import "./App.css";
import GameBoard from "./components/GameBoard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { puzzleBoard: puzzleBoard, solvedBoard: solvedBoard };
  }

  digitInputed = e => {
    const { id, value } = e.target;
    if (value > 0 && value < 10) {
      const puzzleboard = [...this.state.puzzleBoard];
      puzzleBoard[id] = value.toString();
      this.setState({ puzzleBoard });
    }
  };

  render() {
    return (
      <div className="container">
        <Header />
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
