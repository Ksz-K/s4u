import React, { Component } from "react";

let gameLevel2pass;

class Controls extends Component {
  handleClick = e => {
    gameLevel2pass = e.target.value;
  };

  render() {
    return (
      <div className="btn-toolbar mt-3" role="toolbar">
        <div className="btn-group mx-auto" role="group">
          <button
            type="button"
            className="btn btn-secondary"
            style={{ cursor: "default" }}
            disabled
          >
            Digits to be shown ? <br></br>
            <span className="font-italic">Game Level</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="17"
            className="btn btn-dark custom-width"
          >
            17 <br></br> <span className="font-italic text-center">for-AI</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="26"
            className="btn btn-danger custom-width"
          >
            26 <br></br> <span className="font-italic">insane</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="35"
            className="btn btn-warning custom-width"
          >
            35 <br></br> <span className="font-italic">tough</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="44"
            className="btn btn-primary custom-width"
          >
            44 <br></br> <span className="font-italic">hard</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="53"
            className="btn btn-info custom-width"
          >
            53 <br></br> <span className="font-italic">medium</span>
          </button>
          <button
            onClick={this.handleClick}
            type="button"
            value="62"
            className="btn btn-success custom-width"
          >
            62 <br></br> <span className="font-italic">easy</span>
          </button>
        </div>
      </div>
    );
  }
}
export const gameLevel = gameLevel2pass;
export default Controls;
