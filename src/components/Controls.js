import React, { Component } from "react";
import PropTypes from "prop-types";
import sudoku from "sudoku-umd";

class Controls extends Component {
  state = {
    btnSelected: { outline: "3px solid #ccc" },
    puzzleBoard: [],
    solvedBoard: []
  };
  createRawPuzzle = () => {
    sudoku.generate(this.state.gameLevel);
  };
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
        this.props.gameState(this.state.puzzleBoard, this.state.solvedBoard);
      }
    );
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="btn-toolbar mt-3" role="toolbar">
        <div
          className="btn-group mx-auto justify-content-centered"
          role="group"
        >
          <button
            type="button"
            className="btn btn-secondary"
            style={{ cursor: "default" }}
            disabled
          >
            Digits
            <span className="d-none d-sm-block">to be shown ?</span>
            <span className="font-italic d-none d-sm-block">Game Level</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="17"
            className="btn btn-dark custom-width"
            style={this.state.btnSelected}
          >
            17 <br></br>{" "}
            <span className="font-italic d-none d-sm-block mt-3 text-center">
              for-AI
            </span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="26"
            className="btn btn-danger custom-width"
          >
            26 <br></br>{" "}
            <span className="font-italic d-none d-sm-block mt-3">insane</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="35"
            className="btn btn-warning custom-width"
          >
            35 <br></br>{" "}
            <span className="font-italic d-none d-sm-block mt-3">tough</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="44"
            className="btn btn-primary custom-width"
          >
            44 <br></br>{" "}
            <span className="font-italic d-none d-sm-block mt-3">hard</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="53"
            className="btn btn-info custom-width"
          >
            53 <br></br>{" "}
            <span className="font-italic d-none d-sm-block mt-3">medium</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="62"
            className="btn btn-success custom-width"
          >
            62 <br></br>{" "}
            <span className="font-italic d-none d-sm-block mt-3">easy</span>
          </button>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  gameState: PropTypes.func.isRequired
};

export default Controls;
