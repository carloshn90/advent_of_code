import test from "node:test";
import { findSymbolPositions, findAllAdyacentNumbers, Pos } from "../../src/day-3/gear-ratios";
import assert from "node:assert/strict";

test("findSymbolPositions", () => {
  const result: Array<Pos> = findSymbolPositions("...*......", 1);

  assert.deepEqual(result, [new Pos(1, 3, '*')]);
});

test("findAllAdyacentNumbers", () => {

  const lines: Array<string> = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598..",
  ];

  const posArr: Array<Pos> = [
    new Pos(1, 3, '*'),
    new Pos(3, 6, '#'),
    new Pos(4, 3, '*'),
    new Pos(5, 5, '+'),
    new Pos(8, 3, '$'),
    new Pos(8, 5, '*')
  ];

  const resultArr: Array<number> = findAllAdyacentNumbers(lines, posArr, 10, 10);
  assert.deepEqual(resultArr.reduce((a, b) => a + b, 0), 4361);
});
