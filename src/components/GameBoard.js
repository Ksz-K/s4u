import React, { Component, Fragment } from "react";
import GameRow from "./GameRow";
//import PropTypes from 'prop-types'

class GameBoard extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   };

  render() {
    const { puzzleBoard, solvedBoard, digitInputed } = this.props;

    return (
      <div className="row align-content-around">
        <div className="col"></div>
        <div className="mt-5" style={{ width: "27rem" }}>
          <GameRow puzzleBoard={puzzleBoard} digitInputed={digitInputed} />
        </div>
        <div className="col"></div>
      </div>
    );
  }
}

export default GameBoard;
