import React, { Component, Fragment } from "react";
import { puzzleBoard } from "../components/Engine";

let novalue = puzzleBoard.map(field => "");

class GameRow extends Component {
  state = {
    novalue: novalue
  };

  onChange = e => {
    const { id, value } = e.target;
    if (value > 0 && value < 10) {
      let novalue = [...this.state.novalue];
      novalue[id] = value;
      this.setState({ novalue });
    }
  };
  render() {
    const { digitInputed } = this.props;
    const puzzleBoard4Draw = [...puzzleBoard];

    return puzzleBoard4Draw.map((field, index) => (
      <input
        className="field "
        key={index}
        id={index}
        name="novalue"
        value={field > 0 ? field : this.state.novalue[index]}
        readOnly={field > 0 ? true : false}
        onChange={this.onChange}
        onInput={digitInputed}
      />
    ));
  }
}

export default GameRow;
