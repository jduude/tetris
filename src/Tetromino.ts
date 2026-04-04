import { RotatingShape } from "./RotatingShape";
import type { TetrominoShapeName } from "./types";

export class Tetromino extends RotatingShape {
  static T_SHAPE = new Tetromino(
    [
      [".", "T", "."],
      ["T", "T", "T"],
      [".", ".", "."],
    ],
    "Tshape"
  );

  static I_SHAPE = new Tetromino(
    [
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      ["I", "I", "I", "I", "."],
      [".", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
    ],
    "Ishape"
  );

  constructor(shape: string[][], name: TetrominoShapeName = "unnamed") {
    super(shape, name);
  }

  toString(): string {
    return this.shape.map((row) => row.join("")).join("\n") + "\n";
  }
}
