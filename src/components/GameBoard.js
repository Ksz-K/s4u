import React, { Component, Fragment } from "react";
import GameRow from "./GameRow";
//import PropTypes from 'prop-types'

class GameBoard extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   };

  render() {
    const { puzzleBoard, solvedBoard } = this.props;

    return (
      <div className="row gameFields">
        <GameRow puzzleBoard={puzzleBoard} solvedBoard={solvedBoard} />
      </div>
    );
  }
}

export default GameBoard;
