import { beforeEach, describe, test, expect } from "vitest";

import { Board } from "../src/Board";

describe("Falling blocks", () => {
  let board: Board;
  beforeEach(() => {
    board = new Board(3, 3);
  });

  test("The board starts empty", () => {
    expect(board.toString()).to.equalShape(`...
       ...
       ...`);
  });

  test("tick before block is dropped is ignored", () => {
    expect(board.toString()).to.equalShape(`...
       ...
       ...`);
  });

  describe("When a block is dropped", () => {
    beforeEach(() => {
      board.drop("X");
    });

    test("it starts from the top middle", () => {
      expect(board.toString()).to.equalShape(
        `.X.
         ...
         ...`
      );
    });

    test("it moves down one row per tick", () => {
      board.tick();
      expect(board.toString()).to.equalShape(
        `...
         .X.
         ...`
      );
    });

    test("it moves down two rows with 2 ticks", () => {
      board.tick();
      board.tick();
      expect(board.toString()).to.equalShape(
        `...
         ...
         .X.`
      );
    });

    test("at most one block may be falling at a time", () => {
      const before = board.toString();
      expect(board.toString()).to.equalShape(
        `.X.
         ...
         ...`
      );
      expect(() => board.drop("Y")).to.throw("already falling");
      const after = board.toString();
      expect(after).to.equal(before);
    });
  });

  describe("When a block reaches the bottom", () => {
    beforeEach(() => {
      board.drop("X");
      board.tick();
      // board.tick();
    });

    test("it is still moving on the last row", () => {
      expect(board.toString()).to.equalShape(
        `...
         .X.
         ...`
      );
      expect(board.hasFalling(), "the player should still be able to move the block").toBeTruthy();
    });

    test("it stops when it hits the bottom", () => {
      board.tick();

      expect(board.toString()).to.equalShape(
        `...
         ...
         .X.`
      );
      expect(board.currentFallingBlock).toBeNull();
      expect(board.hasFalling(), "the block should stop moving").toBeFalsy();
    });
  });

  describe("When a block lands on another block", () => {
    beforeEach(() => {
      board.drop("X");
      board.tick();
      board.tick();
      board.drop("Y");
      board.tick();
    });

    test("it is still moving on the row above the other block", () => {
      expect(board.toString()).to.equalShape(
        `...
         .Y.
         .X.`
      );
      expect(board.hasFalling(), "the player should still be able to move the block").toBeTruthy();
    });

    test("it stops when it hits the other block", () => {
      board.tick();

      expect(board.toString()).to.equalShape(
        `...
         .Y.
         .X.`
      );
      expect(board.hasFalling(), "the block should stop moving").toBeFalsy();
    });
  });
});
