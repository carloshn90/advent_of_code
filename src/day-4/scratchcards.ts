export class Card {
  id: string;
  winningNumbers: Array<number>;
  numbersYouHave: Array<number>;
  multiplier: number = 1;

  constructor(id: string, winningNumbers: Array<number>, numbersYouHave: Array<number>) {
    this.id = id;
    this.winningNumbers = winningNumbers;
    this.numbersYouHave = numbersYouHave;
  }
}

export const parseLine = (line: string): Card => {

  const [cardId, subLine] = line.split(':');
  const [winningNumbers, numbersYouHave] = subLine.split('|');

  return new Card(cardId, parseNumbers(winningNumbers), parseNumbers(numbersYouHave));
};

export const calculatePileValue = (cards: Array<Card>): number => {

  let result: number = 0;
  for (const card of cards) {
    const numberOfWinnings: number = calculateNumberOfWinnings(card);
    if (numberOfWinnings > 0) {
      result += Math.pow(2, numberOfWinnings - 1);
    }
  }
  return result;
};

export const calculateNumberOfCardCopies = (cards: Array<Card>): number => {

  for (let i = 0; i < cards.length; ++i) {
    const numberOfWinnings: number = calculateNumberOfWinnings(cards[i]);

    for (let j = i + 1; j <= (numberOfWinnings + i) && j < cards.length; ++j) {
      cards[j].multiplier += cards[i].multiplier;
    }
  }

  return cards.reduce((a, b) => a + b.multiplier, 0);
};

const parseNumbers = (numberLine: string): Array<number> =>
  numberLine.split(' ')
    .map(c => parseInt(c))
    .filter(n => !isNaN(n));

const calculateNumberOfWinnings = (card: Card): number =>
  card.winningNumbers
    .filter(v => card.numbersYouHave.includes(v))
    .length;

import fs from 'node:fs';

try {
  const data: string = fs.readFileSync('./src/day-4/input.txt', 'utf8');
  const lines: Array<string> = data.split("\n").filter(l => l !== '');
  const cards: Array<Card> = lines.map(l => parseLine(l));
  console.log("result part one: ", calculatePileValue(cards));
  console.log("result part two: ", calculateNumberOfCardCopies(cards));
} catch (err) {
  console.error(err);
}
