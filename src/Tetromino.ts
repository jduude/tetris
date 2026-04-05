import { RotatingShape } from "./RotatingShape";
import { I_SHAPE_ROTATED_0_2 } from "./tetrminoShapes";

export class Tetromino {
  private readonly rotatingShape: RotatingShape;

  static T_SHAPE = new Tetromino(
    new RotatingShape(
      [
        [".", "T", "."],
        ["T", "T", "T"],
        [".", ".", "."],
      ],
      "Tshape"
    )
  );
  static O_SHAPE = new Tetromino(
    new RotatingShape(
      [
        [".", "O", "O"],
        [".", "O", "O"],
        [".", ".", "."],
      ],
      "Oshape"
    )
  );

  static I_SHAPE = new Tetromino(new RotatingShape(I_SHAPE_ROTATED_0_2, "Ishape"));

  private constructor(rotatingShape: RotatingShape) {
    this.rotatingShape = rotatingShape;
  }

  rotateRight(): Tetromino {
    return new Tetromino(this.rotatingShape.rotateRight());
  }

  rotateLeft(): Tetromino {
    return new Tetromino(this.rotatingShape.rotateLeft());
  }

  toString(): string {
    return this.rotatingShape.toString();
  }
}
