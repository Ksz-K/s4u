import React, { Component } from "react";
import sudoku from "sudoku-umd";
import Header from "./components/Header";
import "./App.css";
import GameBoard from "./components/GameBoard";

const gameLevel = "hard";

const rawPuzzleBoard = sudoku.generate(gameLevel);
const rawSolvedBoard = sudoku.solve(rawPuzzleBoard);

let puzzleBoard = Array.from(rawPuzzleBoard).map(field =>
  field === "." ? (field = 0) : (field = field * 1)
);

let solvedBoard = Array.from(rawSolvedBoard).map(field => (field = field * 1));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { puzzleBoard: puzzleBoard, solvedBoard: solvedBoard };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <GameBoard
          puzzleBoard={this.state.puzzleBoard}
          solvedBoard={this.state.solvedBoard}
        />
      </div>
    );
  }
}

export default App;
