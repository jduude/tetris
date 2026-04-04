import { RotatingShape } from "./RotatingShape";
import { I_SHAPE_ROTATED_0_2 } from "./tetrminoShapes";
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

  static I_SHAPE = new Tetromino(I_SHAPE_ROTATED_0_2, "Ishape");

  constructor(shape: string[][], name: TetrominoShapeName = "unnamed") {
    super(shape, name);
  }

  toString(): string {
    return this.shape.map((row) => row.join("")).join("\n") + "\n";
  }
}
