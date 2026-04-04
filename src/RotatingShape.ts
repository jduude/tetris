export class RotatingShape {
  shape: string[][];

  constructor(shape: string[][]) {
    this.shape = shape;
  }

  static fromString(s: string): RotatingShape {
    const shape = s
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => line.split(""));
    return new RotatingShape(shape);
  }

  rotateRight(): RotatingShape {
    const newShape = this.shape[0].map((_, colIndex) => this.shape.map((row) => row[colIndex]).reverse());
    return new RotatingShape(newShape);
  }

  toString(): string {
    return this.shape.map((row) => row.join("")).join("\n") + "\n";
  }
}
