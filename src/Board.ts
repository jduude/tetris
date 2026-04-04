export class Board {
  width: number;
  height: number;
  initialState: string[][];
  state: string[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.initialState = Array(this.height)
      .fill(null)
      .map(() =>
        Array(this.width)
          .fill(null)
          .map(() => ".")
      );
    this.state = this.initialState.slice().map((row) => row.slice());
  }

  drop(block: string) {
    const existingFallingBlock = this.state.find((row) => row.find((cell) => cell !== "."));
    if (existingFallingBlock) {
      throw new Error("already falling");
    }
    this.state[0][1] = block;
  }

  tick() {
    this.state[0][1] = ".";
    this.state[1][1] = "X";
  }

  toString() {
    return this.state.map((row) => row.join("")).join("\n") + "\n";
  }
}
