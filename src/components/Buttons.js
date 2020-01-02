import React, { Component } from "react";

class Buttons extends Component {
  render() {
    const { digitColors, solveIt, reloadApp, undo } = this.props;
    return (
      <div>
        <button type="button" className="btn btn-hint" onClick={digitColors}>
          Hint
        </button>
        <button type="button" className="btn btn-solve" onClick={solveIt}>
          Solve it !
        </button>
        <button type="button" className="btn btn-undo" onClick={undo}>
          Undo entry
        </button>
        <button type="button" className="btn btn-primary" onClick={reloadApp}>
          New game
        </button>
      </div>
    );
  }
}

export default Buttons;
