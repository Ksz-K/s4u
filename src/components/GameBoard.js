import React, { Component } from "react";
import PropTypes from "prop-types";
import GameRow from "./GameRow";
import Buttons from "./Buttons";

//import PropTypes from 'prop-types'

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.gameRow = React.createRef();
  }

  digitColors = () => {
    this.gameRow.current.changeColor();
  };

  solveIt = () => {
    this.gameRow.current.solveIt();
  };

  reloadApp = () => {
    this.gameRow.current.reloadApp();
  };

  render() {
    const { puzzleBoard, solvedBoard, digitInputed, undo } = this.props;
    return (
      <div className={"row align-content-around "}>
        <div className="col"></div>
        <div className="mt-5 nineXnine">
          <GameRow
            ref={this.gameRow}
            puzzleBoard={puzzleBoard}
            solvedBoard={solvedBoard}
            digitInputed={digitInputed}
          />
          <Buttons
            digitColors={this.digitColors}
            solveIt={this.solveIt}
            undo={undo}
            reloadApp={this.reloadApp}
          />
        </div>
        <div className="col"></div>
      </div>
    );
  }
}
GameBoard.propTypes = {
  puzzleBoard: PropTypes.array,
  solvedBoard: PropTypes.array,
  digitInputed: PropTypes.func,
  undo: PropTypes.func.isRequired
};
export default GameBoard;
