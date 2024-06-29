export const sumAllNumbers = (lines: Array<string>): number => {
  let result: number = 0;
  for (const line of lines) {
    result += joinFirstAndLast(line);
  }
  return result;
};

export const joinFirstAndLast = (line: string): number => {
  const match: Array<RegExpExecArray> = [...line.matchAll(/\d/g)];
  if (match.length > 0) {
    return parseInt(match[0].toString() + match[match.length - 1].toString());
  }
  return 0;
};

export const convertNumberNamesToInt = (line: string): string => {
  line = line.replace("one", "one1one");
  line = line.replace("two", "two2two");
  line = line.replace("three", "three3three");
  line = line.replace("four", "four4four");
  line = line.replace("five", "five5five");
  line = line.replace("six", "six6six");
  line = line.replace("seven", "seven7seven");
  line = line.replace("eight", "eight8eight");
  line = line.replace("nine", "nine9nine");
  return line;
};

import fs from 'node:fs';

try {
  const data: string = fs.readFileSync('./src/day-1/input.txt', 'utf8');
  const lines: Array<string> = data.split("\n");
  console.log("result part one: ", sumAllNumbers(lines));
  console.log("result part two: ", sumAllNumbers(lines.map(convertNumberNamesToInt)));
} catch (err) {
  console.error(err);
}
