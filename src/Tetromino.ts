export class Tetromino {
  static T_SHAPE = new Tetromino([
    [".", "T", "."],
    ["T", "T", "T"],
    [".", ".", "."],
  ]);
  private shape: string[][];

  constructor(shape: string[][]) {
    this.shape = shape;
  }

  toString(): string {
    return this.shape.map((row) => row.join("")).join("\n") + "\n";
  }
}
