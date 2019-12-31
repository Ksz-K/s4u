import React, { Component, Fragment } from "react";
import Spinner from "./Spinner";

class GameRow extends Component {
  state = {
    okey: { color: "#000" },
    notOkey: {
      color: "#000"
    },
    solveit: false
  };

  changeColor = () => {
    this.setState(
      {
        okey: { color: "#0f0" },
        notOkey: {
          color: "#f00"
        }
      },
      () => setTimeout(this.restoreColor, 1234)
    );
  };

  restoreColor = () => {
    this.setState({
      okey: { color: "#000" },
      notOkey: {
        color: "#000"
      }
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.solveit === 2) {
  //     return false;
  //   }
  //   return true;
  // }

  solveIt = () => {
    this.setState(
      prevState => ({
        solveit: true
      }),
      () => {
        document.addEventListener("mousedown", this.reloadApp);
      }
    );
  };

  reloadApp = () => {
    window.location.reload();
  };
  render() {
    const { digitInputed, solvedBoard, puzzleBoard } = this.props;

    if (this.props.puzzleBoard === null) {
      return <Spinner />;
    } else if (this.state.solveit) {
      return solvedBoard.map((field, index) => (
        <input className="field" key={index} value={field} readOnly={true} />
      ));
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
              : (field == solvedBoard[index]) & (typeof field !== "number")
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
