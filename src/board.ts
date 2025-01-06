import { Cell } from "./types";

export class Board {
  private board: Cell[][];

  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  getBoard(): Cell[][] {
    return this.board;
  }
}
