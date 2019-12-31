import React, { Component } from "react";

export default class WinnerBoard extends Component {
  render() {
    return (
      <div className="alert alert-danger danger" role="alert">
        You lost...
      </div>
    );
  }
}
