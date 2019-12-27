import React, { Component, Fragment } from "react";
import { puzzleBoard } from "../components/Engine";

class GameRow extends Component {
  render() {
    const { digitInputed } = this.props;

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

export default GameRow;
