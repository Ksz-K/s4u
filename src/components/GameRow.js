import React, { Component, Fragment } from "react";
import Spinner from "./Spinner";

class GameRow extends Component {
  state = {
    okey: { color: "#0f0" },
    notOkey: {
      color: "#f00"
    }
  };
  render() {
    const { digitInputed, puzzleBoard, solvedBoard } = this.props;
    if (puzzleBoard === null) {
      return <Spinner />;
    } else {
      return puzzleBoard.map((field, index) => (
        <input
          className="field"
          key={index}
          id={index}
          value={field}
          readOnly={(field > 0) & (typeof field === "number") ? true : false}
          style={
            (field == solvedBoard[index]) & (typeof field === "number")
              ? null
              : (field == solvedBoard[index]) & (typeof field != "number")
              ? this.state.okey
              : this.state.notOkey
          }
          onChange={digitInputed}
        />
      ));
    }
  }
}

export default GameRow;
