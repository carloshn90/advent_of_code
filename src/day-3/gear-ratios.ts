import { Extract } from "../common/extract";

export class Pos {
  y: number;
  x: number;
  symbol: string;

  constructor(y: number, x: number, symbol: string) {
    this.y = y;
    this.x = x;
    this.symbol = symbol;
  }
}

export const findSymbolPositions = (line: string, y: number): Array<Pos> => {

  const posArr: Array<Pos> = [];

  for (let x = 0; x < line.length; ++x) {
    if (line.charAt(x).match(/[-!$%^&*()_+|~=`{}[\]:";'<>?,#@/]/)) {
      posArr.push(new Pos(y, x, line.charAt(x)));
    }
  }

  return posArr;
};

const findAllSymbolPostions = (lines: Array<string>): Array<Pos> => {

  const result: Array<Pos> = [];

  for (let y = 0; y < lines.length; ++y) {
    result.push(...findSymbolPositions(lines[y], y));
  }

  return result;
};

export const findAllAdyacentNumbers = (lines: Array<string>, posArr: Array<Pos>, m: number, n: number): Array<number> => {

  const extract: Extract = new Extract(m, n);
  const resultArr: Array<number> = [];

  for (const pos of posArr) {
    resultArr.push(...findAdyacentNumbers(lines, pos, extract));
  }

  return resultArr;
};

export const findGearRatiosProduces = (lines: Array<string>, posArr: Array<Pos>, m: number, n: number): Array<number> => {

  const gearPosArr: Array<Pos> = posArr.filter(p => '*' === p.symbol);
  const extract: Extract = new Extract(m, n);
  const resultArr: Array<number> = [];

  for (const pos of gearPosArr) {
    const adyacentArr: Array<number> = findAdyacentNumbers(lines, pos, extract);
    if (adyacentArr.length === 2) {
      resultArr.push(adyacentArr[0] * adyacentArr[1]);
    }
  }

  return resultArr;
};

const findAdyacentNumbers = (lines: Array<string>, pos: Pos, extract: Extract): Array<number> => {
  let result: Array<number> = [];
  if (pos.y > 0) {
    const lineAbove: string = lines[pos.y - 1];
    result.push(extract.numberFromRandPos(lineAbove, pos.y - 1, pos.x - 1));
    result.push(extract.numberFromRandPos(lineAbove, pos.y - 1, pos.x));
    result.push(extract.numberFromRandPos(lineAbove, pos.y - 1, pos.x + 1));
  }

  const currentLine: string = lines[pos.y];
  result.push(extract.numberFromRandPos(currentLine, pos.y, pos.x + 1));
  result.push(extract.numberFromRandPos(currentLine, pos.y, pos.x - 1));

  if (pos.y < (lines.length - 1)) {
    const lineBelow: string = lines[pos.y + 1];
    result.push(extract.numberFromRandPos(lineBelow, pos.y + 1, pos.x - 1));
    result.push(extract.numberFromRandPos(lineBelow, pos.y + 1, pos.x));
    result.push(extract.numberFromRandPos(lineBelow, pos.y + 1, pos.x + 1));
  }

  result = result.filter(n => !isNaN(n));
  return result;
};

import fs from 'node:fs';

try {
  const data: string = fs.readFileSync('./src/day-3/input.txt', 'utf8');
  const lines: Array<string> = data.split("\n");
  console.log("result part one: ", findAllAdyacentNumbers(lines, findAllSymbolPostions(lines), lines.length, lines[0].length).reduce((a, b) => a + b, 0));
  console.log("result part two: ", findGearRatiosProduces(lines, findAllSymbolPostions(lines), lines.length, lines[0].length).reduce((a, b) => a + b, 0));
} catch (err) {
  console.error(err);
}
