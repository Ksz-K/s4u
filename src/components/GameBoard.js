import React, { Component, Fragment } from "react";
import GameRow from "./GameRow";
//import PropTypes from 'prop-types'

class GameBoard extends Component {
  render() {
    const { puzzleBoard, solvedBoard, digitInputed } = this.props;
    const nazwa = ""; //"d-none";
    return (
      <div className={"row align-content-around " + nazwa}>
        <div className="col"></div>
        <div className="mt-5 nineXnine">
          <GameRow
            puzzleBoard={puzzleBoard}
            solvedBoard={solvedBoard}
            digitInputed={digitInputed}
          />
        </div>
        <div className="col"></div>
      </div>
    );
  }
}

export default GameBoard;
