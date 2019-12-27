import React, { Component, Fragment } from "react";
import Spinner from "./Spinner";

class GameRow extends Component {
  render() {
    const { digitInputed, puzzleBoard, solvedBoard } = this.props;
    if (puzzleBoard === null) {
      return <Spinner />;
    } else {
      return puzzleBoard.map((field, index) => (
        <input
          className="field "
          key={index}
          id={index}
          name="novalue"
          value={field}
          readOnly={(field > 0) & (typeof field === "number") ? true : false}
          onChange={digitInputed}
        />
      ));
    }
  }
}

export default GameRow;
