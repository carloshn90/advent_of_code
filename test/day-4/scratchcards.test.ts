import test from "node:test";
import { calculateNumberOfCardCopies, calculatePileValue, Card, parseLine } from "../../src/day-4/scratchcards";
import { deepEqual, strictEqual } from "node:assert";

test("parseLine", () => {

  const result: Card = parseLine("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53");

  deepEqual(result, new Card("Card 1", [41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53]));
});

test("calculatePileValue", () => {

  const pileOfCards: Array<Card> = [
    new Card("Card 1", [41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53]),
    new Card("Card 2", [13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19]),
    new Card("Card 3", [1, 21, 53, 59, 44], [69, 82, 63, 72, 16, 21, 14, 1]),
    new Card("Card 4", [41, 92, 73, 84, 69], [59, 84, 76, 51, 58, 5, 54, 83]),
    new Card("Card 5", [87, 83, 26, 28, 32], [88, 30, 70, 12, 93, 22, 82, 36]),
    new Card("Card 6", [31, 18, 13, 56, 72], [74, 77, 10, 23, 35, 67, 36, 11]),
  ];

  const result: number = calculatePileValue(pileOfCards);

  strictEqual(result, 13);
});

test("calculateNumberOfCardCopies", () => {

  const pileOfCards: Array<Card> = [
    new Card("Card 1", [41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53]),
    new Card("Card 2", [13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19]),
    new Card("Card 3", [1, 21, 53, 59, 44], [69, 82, 63, 72, 16, 21, 14, 1]),
    new Card("Card 4", [41, 92, 73, 84, 69], [59, 84, 76, 51, 58, 5, 54, 83]),
    new Card("Card 5", [87, 83, 26, 28, 32], [88, 30, 70, 12, 93, 22, 82, 36]),
    new Card("Card 6", [31, 18, 13, 56, 72], [74, 77, 10, 23, 35, 67, 36, 11]),
  ];

  const result: number = calculateNumberOfCardCopies(pileOfCards);

  strictEqual(result, 30);
});
