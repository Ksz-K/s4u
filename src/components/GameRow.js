import React, { Component, Fragment } from "react";
import Spinner from "./Spinner";
import WinnerBoard from "./WinnerBoard";
import LoserBoard from "./LoserBoard";

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
    } else if (puzzleBoard.toString() === solvedBoard.toString()) {
      document.addEventListener("mousedown", this.reloadApp);
      return solvedBoard.map((field, index) =>
        index === 30 ? (
          <Fragment>
            <input
              className="field"
              key={index}
              value={field}
              readOnly={true}
            />
            <WinnerBoard></WinnerBoard>
          </Fragment>
        ) : (
          <input className="field" key={index} value={field} readOnly={true} />
        )
      );
    } else if (!puzzleBoard.includes("")) {
      document.addEventListener("mousedown", this.reloadApp);
      return puzzleBoard.map((field, index) =>
        index === 30 ? (
          <Fragment>
            <input
              className="field"
              key={index}
              value={field}
              readOnly={true}
            />
            <LoserBoard></LoserBoard>
          </Fragment>
        ) : (
          <input className="field" key={index} value={field} readOnly={true} />
        )
      );
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
