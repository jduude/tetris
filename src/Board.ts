export class Board {
  width: number;
  height: number;
  state: string[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.state = Array(this.height)
      .fill(null)
      .map(() =>
        Array(this.width)
          .fill(null)
          .map(() => ".")
      );
  }

  drop(block: string) {
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
