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
      return;
    }
    const column = 1; // dummy temp column for now
    const currentRow = this.state.findIndex((row) => row.includes(this.currentFallingBlock!));
    const nextRow = currentRow + 1;

    const nextRowHasBlock = this.state[nextRow][column] !== ".";
    if (nextRowHasBlock) {
      this.currentFallingBlock = null;
      return;
    }

    if (currentRow < this.state.length) {
      this.state[currentRow][column] = ".";

      this.state[nextRow][column] = this.currentFallingBlock!;
      if (nextRow >= this.state.length - 1) {
        this.currentFallingBlock = null;
      }
    } else {
      this.currentFallingBlock = null;
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
