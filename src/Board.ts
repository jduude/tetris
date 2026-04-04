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
    if (!this.currentFallingBlock) {
      throw new Error("no block to tick");
    }

    const currentRow = this.state.findIndex((row) => row.includes(this.currentFallingBlock!));
    if (currentRow < this.state.length) {
      this.state[currentRow][1] = ".";
      this.state[currentRow + 1][1] = this.currentFallingBlock!;
    }
  }
  hasFalling(): boolean {
    return (
      this.currentFallingBlock !== null &&
      this.state.slice(0, this.state.length - 1).some((row) => row.includes(this.currentFallingBlock!))
    );
  }
  toString() {
    return this.state.map((row) => row.join("")).join("\n") + "\n";
  }
}
