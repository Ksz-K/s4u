import React, { Component } from "react";
import sudoku from "sudoku-umd";

class Controls extends Component {
  state = {
    btnSelected: { outline: "3px solid #ccc" },
    puzzleBoard: [],
    solvedBoard: []
  };
  createRawPuzzle = () => sudoku.generate(this.state.gameLevel);

  handleClick = e => {
    let gameLevel = parseInt(e.target.value);
    const rawPuzzleBoard = sudoku.generate(gameLevel);
    const rawSolvedBoard = sudoku.solve(rawPuzzleBoard);

    const puzzleBoard = Array.from(rawPuzzleBoard).map(field =>
      field === "." ? (field = "") : (field = field * 1)
    );
    const solvedBoard = Array.from(rawSolvedBoard).map(
      field => (field = field * 1)
    );

    this.setState(
      {
        btnSelected: {},
        puzzleBoard,
        solvedBoard
      },
      () => {
        console.log(this.state.puzzleBoard);
        this.props.gameState(this.state.puzzleBoard, this.state.solvedBoard);
      }
    );
  };
  getData = () => {
    const rawPuzzleBoard = sudoku.generate(17);
    const rawSolvedBoard = sudoku.solve(rawPuzzleBoard);

    const puzzleBoard = Array.from(rawPuzzleBoard).map(field =>
      field === "." ? (field = "") : (field = field * 1)
    );
    const solvedBoard = Array.from(rawSolvedBoard).map(
      field => (field = field * 1)
    );

    this.setState(
      {
        ...this.state,
        puzzleBoard,
        solvedBoard
      },
      () => {
        console.log(this.state.puzzleBoard);
        this.props.gameState(this.state.puzzleBoard, this.state.solvedBoard);
      }
    );
  };
  //   simulateClick = e => {
  //     e.dispatchEvent(
  //       new MouseEvent("click", {
  //         view: window,
  //         bubbles: true,
  //         cancelable: true,
  //         buttons: 1
  //       })
  //     );
  //   };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="btn-toolbar mt-3" role="toolbar">
        <div className="btn-group mx-auto" role="group">
          <button
            type="button"
            className="btn btn-secondary"
            style={{ cursor: "default" }}
            disabled
          >
            Digits to be shown ? <br></br>
            <span className="font-italic">Game Level</span>
          </button>
          <button
            //ref={this.simulateClick}
            onClick={this.handleClick}
            type="button"
            value="17"
            className="btn btn-dark custom-width"
            style={this.state.btnSelected}
          >
            17 <br></br> <span className="font-italic text-center">for-AI</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="26"
            className="btn btn-danger custom-width"
          >
            26 <br></br> <span className="font-italic">insane</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="35"
            className="btn btn-warning custom-width"
          >
            35 <br></br> <span className="font-italic">tough</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="44"
            className="btn btn-primary custom-width"
          >
            44 <br></br> <span className="font-italic">hard</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="53"
            className="btn btn-info custom-width"
          >
            53 <br></br> <span className="font-italic">medium</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="62"
            className="btn btn-success custom-width"
          >
            62 <br></br> <span className="font-italic">easy</span>
          </button>
        </div>
      </div>
    );
  }
}

export const puzzleBoard = Array.from(
  "52...6.........7.13...........4..8..6......5...........418.........3..2...87....."
).map(field => (field === "." ? (field = "") : (field = field * 1)));

export const solvedBoard = Array.from(
  "52...6.........7.13...........4..8..6......5...........418.........3..2...87....."
).map(field => (field = field * 1));

export default Controls;
