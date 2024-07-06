import { test } from "node:test";
import assert from "node:assert/strict";
import { sumAllNumbers, joinFirstAndLast, convertNumberNamesToInt } from "../../src/day-1/trebuchet";

test("joinFirstAndLast, line with multiple numbers toggeter", () => {
  const result: number = joinFirstAndLast("5treb7uchet55");
  assert.strictEqual(result, 55);
});

test("joinFirstAndLast, without numbers", () => {
  const result: number = joinFirstAndLast("trebauchet");
  assert.strictEqual(result, 0);
});

test("joinFirstAndLast, with only 1 number", () => {
  const result: number = joinFirstAndLast("treb7uchet");
  assert.strictEqual(result, 77);
});

test("sumAllNumbers", () => {
  const result: number = sumAllNumbers(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet", "trebauchet"]);
  assert.strictEqual(result, 142);
});

test("convertNumberNamesToInt", () => {
  const expected: Array<string> = ["two2two1nine9nine", "eight8eightwo2twothree3three", "abcone1one2three3threexyz",
    "xtwo2twone1one3four4four", "4nine9nineeight8eightseven7seven2", "zone1oneight8eight234", "7pqrstsix6sixteen"];
  const result: Array<string> = ["two1nine", "eightwothree", "abcone2threexyz", "xtwone3four", "4nineeightseven2", "zoneight234", "7pqrstsixteen"].map(convertNumberNamesToInt);
  assert.equal(result.join(), expected.join());
});
