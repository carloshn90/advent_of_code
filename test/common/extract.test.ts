import test from "node:test";
import { Extract } from "../../src/common/extract";
import assert from "node:assert/strict";

test("Extract.numberFromRandPos from the beggining", () => {
  const extract: Extract = new Extract(1, 10);
  const result: number = extract.numberFromRandPos("467..114..", 0, 0);
  assert.equal(result, 467);
});

test("Extract.numberFromRandPos from the middle", () => {
  const extract: Extract = new Extract(1, 10);
  const result: number = extract.numberFromRandPos("467..114..", 0, 1);
  assert.equal(result, 467);
});

test("Extract.numberFromRandPos from the end", () => {
  const extract: Extract = new Extract(1, 10);
  const result: number = extract.numberFromRandPos("..35..633.", 0, 3);
  assert.equal(result, 35);
});

test("Extract.numberFromRandPos extract number only once", () => {
  const extract: Extract = new Extract(1, 10);

  let result: number = extract.numberFromRandPos("467..114..", 0, 2);
  assert.equal(result, 467);

  result = extract.numberFromRandPos("467..114..", 0, 0);
  assert.equal(result, Number.NaN);
});
