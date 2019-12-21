import React, { Component, Fragment } from "react";

class GameRow extends Component {
  render() {
    const { puzzleBoard, solvedBoard } = this.props;

    return puzzleBoard.map((field, index) => (
      <input
        className="field "
        key={index}
        id={index}
        value={field > 0 ? field : null}
        readOnly={field > 0 ? true : false}
      />
    ));
  }
}

export default GameRow;
