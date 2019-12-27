//import React, { Component } from "react";
import sudoku from "sudoku-umd";

export const gameLevel = "hard";

export const rawPuzzleBoard = sudoku.generate(gameLevel);
export const rawSolvedBoard = sudoku.solve(rawPuzzleBoard);

export const puzzleBoard = Array.from(rawPuzzleBoard).map(field =>
  field === "." ? (field = "") : (field = field * 1)
);

export const solvedBoard = Array.from(rawSolvedBoard).map(
  field => (field = field * 1)
);
