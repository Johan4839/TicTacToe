import { Board } from "../../src/board";

describe("Tic Tac Toe is a game which is played on a 3x3 board.", () => {
  it("When we start a game the board is empty ", () => {
    const board = new Board().getBoard();
    expect(board.length).toBe(3);
    expect(board[0].length).toBe(3);

    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        expect(board[row][col]).toBe("");
      }
    }
  });
});
