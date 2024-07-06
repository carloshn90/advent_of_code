export class Extract {

  #matrix: Array<Array<boolean>>;

  // m = rows, n = columns
  constructor(m: number, n: number) {
    this.#matrix = Array.from(Array(m), () => new Array(n));
  };

  // y = rows, x = columns
  numberFromRandPos = (line: string, y: number, x: number): number => {
    const result: string = this.#number(line, y, x);
    return parseInt(result);
  };

  #number = (line: string, y: number, x: number): string => {

    if (!this.#isNumeric(line.charAt(x)) || this.#matrix[y][x]) return '';
    this.#matrix[y][x] = true;

    return this.#numberLeft(line, y, x - 1) + line.charAt(x) + this.#numberRight(line, y, x + 1);
  };

  #numberLeft = (line: string, y: number, x: number): string => {

    if (!this.#isNumeric(line.charAt(x)) || x < 0 || this.#matrix[y][x]) return '';

    this.#matrix[y][x] = true;

    return this.#numberLeft(line, y, x - 1) + line.charAt(x);
  };

  #numberRight = (line: string, y: number, x: number): string => {

    if (!this.#isNumeric(line.charAt(x)) || x >= line.length || this.#matrix[y][x]) return '';

    this.#matrix[y][x] = true;

    return line.charAt(x) + this.#numberRight(line, y, x + 1);
  };

  #isNumeric = (c: string): boolean => {
    return /\d+/.test(c);
  };
}
