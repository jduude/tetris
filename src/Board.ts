export class Board {
  width: number;
  height: number;
  initialState: string[][];
  state: string[][];
  currentFallingBlock: string | null = null;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.currentFallingBlock = null;
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
    if (this.currentFallingBlock) {
      throw new Error("already falling");
    }
    this.currentFallingBlock = block;
    this.state[0][1] = block;
  }

  tick() {
    this.state[0][1] = ".";
    this.state[1][1] = this.currentFallingBlock!;
  }

  toString() {
    return this.state.map((row) => row.join("")).join("\n") + "\n";
  }
}
