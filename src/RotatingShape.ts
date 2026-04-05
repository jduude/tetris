import { I_SHAPE_ROTATED_0_2, I_SHAPE_ROTATED_1_3 } from "./tetrminoShapes";
import type { RotationState, TetrominoShapeName } from "./types";

export class RotatingShape {
  readonly shape: readonly (readonly string[])[];
  readonly name: TetrominoShapeName;
  readonly rotationState: RotationState;

  constructor(shape: string[][], name: TetrominoShapeName = "unnamed", rotationState: RotationState = 0) {
    this.shape = shape.map((row) => [...row]);
    this.name = name;
    this.rotationState = rotationState;
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
    if (this.name === "Ishape" && this.rotationState % 2 === 1) {
      const newShape = I_SHAPE_ROTATED_0_2.map((row) => [...row]);
      return new RotatingShape(newShape, this.name, ((this.rotationState + 3) % 4) as RotationState);
    } else if (this.name === "Oshape") {
      return new RotatingShape(
        this.shape.map((row) => [...row]),
        this.name,
        0
      );
    }
    const newShape = this.shape[0].map((_, colIndex) => this.shape.map((row) => row[colIndex]).reverse());
    return new RotatingShape(newShape, this.name, ((this.rotationState + 1) % 4) as RotationState);
  }

  rotateLeft(): RotatingShape {
    if (this.name === "Ishape" && this.rotationState % 2 === 0) {
      const newShape = I_SHAPE_ROTATED_1_3.map((row) => [...row]);
      return new RotatingShape(newShape, this.name, ((this.rotationState + 3) % 4) as RotationState);
    } else if (this.name === "Oshape") {
      return new RotatingShape(
        this.shape.map((row) => [...row]),
        this.name,
        0
      );
    }

    const newShape = this.shape[0].map((_, colIndex) => this.shape.map((row) => row[colIndex])).reverse();

    return new RotatingShape(newShape, this.name, ((this.rotationState + 3) % 4) as RotationState);
  }

  toString(): string {
    return this.shape.map((row) => row.join("")).join("\n") + "\n";
  }
}
