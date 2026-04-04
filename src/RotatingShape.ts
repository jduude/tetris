import type { TetrominoShapeName } from "./types";

export class RotatingShape {
  readonly shape: readonly (readonly string[])[];
  readonly name: TetrominoShapeName;

  constructor(shape: string[][], name: TetrominoShapeName = "unnamed") {
    this.shape = shape.map((row) => [...row]);
    this.name = name;
  }

  static fromString(s: string, name: TetrominoShapeName = "unnamed"): RotatingShape {
    const shape = s
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => line.split(""));
    return new RotatingShape(shape, name);
  }

  rotateRight(): RotatingShape {
    const newShape = this.shape[0].map((_, colIndex) => this.shape.map((row) => row[colIndex]).reverse());
    return new RotatingShape(newShape, this.name);
  }

  rotateLeft(): RotatingShape {
    const newShape = this.shape[0].map((_, colIndex) => this.shape.map((row) => row[colIndex])).reverse();
    return new RotatingShape(newShape, this.name);
  }

  toString(): string {
    return this.shape.map((row) => row.join("")).join("\n") + "\n";
  }
}
