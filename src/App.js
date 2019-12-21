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
    console.log(e.target.id);
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
