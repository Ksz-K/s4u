import React, { Component } from "react";

class Buttons extends Component {
  render() {
    const { digitColors, solveIt, reloadApp } = this.props;
    return (
      <div>
        <button type="button" className="btn btn-hint" onClick={digitColors}>
          Give me a hint
        </button>
        <button type="button" className="btn btn-solve" onClick={solveIt}>
          Solve it !
        </button>
        <button type="button" className="btn btn-primary" onClick={reloadApp}>
          New game
        </button>
      </div>
    );
  }
}

export default Buttons;
