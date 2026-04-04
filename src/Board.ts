export class Board {
  width;
  height;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  toString() {
    return  Array(this.height).fill(null)
      .map(() => Array(this.width).fill(null)
        .map(() => ".")
        .join("")
      )
      .join("\n");
  }
}
