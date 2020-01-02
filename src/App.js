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
      solvedBoard: null,
      trackEntries: []
    };
  }

  digitInputed = e => {
    const { id, value } = e.target;
    if (value > 0 && value < 10) {
      const updateFromPlayer = [...this.state.puzzleBoard];
      updateFromPlayer[id] = value.toString();
      this.setState({
        puzzleBoard: updateFromPlayer,
        trackEntries: [...this.state.trackEntries, id]
      });
    }
  };

  fromControls = (puzzleBoard, solvedBoard) => {
    this.setState({
      puzzleBoard,
      solvedBoard
    });
  };

  undo = () => {
    console.log(this.state.trackEntries);
    if (this.state.trackEntries.length) {
      const updateFromUndo = [...this.state.puzzleBoard];
      const updatePosition = this.state.trackEntries.pop();
      updateFromUndo[updatePosition] = "";
      this.setState({
        puzzleBoard: updateFromUndo
      });
    }
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Controls gameState={this.fromControls} />
        <GameBoard
          undo={this.undo}
          puzzleBoard={this.state.puzzleBoard}
          solvedBoard={this.state.solvedBoard}
          digitInputed={this.digitInputed}
        />
      </div>
    );
  }
}

export default App;
