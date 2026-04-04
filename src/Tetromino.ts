import { RotatingShape } from "./RotatingShape";

export class Tetromino extends RotatingShape {
  static T_SHAPE = new Tetromino([
    [".", "T", "."],
    ["T", "T", "T"],
    [".", ".", "."],
  ]);

  static I_SHAPE = new Tetromino([
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
    ["I", "I", "I", "I", "."],
    [".", ".", ".", ".", "."],
    [".", ".", ".", ".", "."],
  ]);

  constructor(shape: string[][]) {
    super(shape);
  }

  toString(): string {
    return this.shape.map((row) => row.join("")).join("\n") + "\n";
  }
}
