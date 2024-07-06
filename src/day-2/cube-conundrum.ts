
export class GameSet {
  red: number;
  green: number;
  blue: number;

  constructor(red: number, green: number, blue: number) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
}

export class Game {
  id: number;
  sets: Array<GameSet>;

  constructor(id: number, sets: Array<GameSet>) {
    this.id = id;
    this.sets = sets;
  }
}

export const convertInputToGame = (line: string): Game => {
  const id: number = parseInt(line.substring(5, line.indexOf(":")));
  const gameSet: Array<GameSet> = line.substring(line.indexOf(":") + 1, line.length).split(";").map(convertInputToGameSet);
  return new Game(id, gameSet);
};

export const convertInputToGameSet = (set: string): GameSet => {
  const subSets: Array<string> = set.split(',');
  let red: number = 0;
  let green: number = 0;
  let blue: number = 0;
  for (const color of subSets) {
    const colorElems: Array<string> = color.split(' ');
    if ("red".includes(colorElems[2])) {
      red = parseInt(colorElems[1]);
    }

    if ("green".includes(colorElems[2])) {
      green = parseInt(colorElems[1]);
    }

    if ("blue".includes(colorElems[2])) {
      blue = parseInt(colorElems[1]);
    }
  }
  return new GameSet(red, green, blue);
};

export const isTheGamePossible = (gameSets: Array<GameSet>): boolean => {

  for (const gameSet of gameSets) {
    if (gameSet.red > 12) return false;
    if (gameSet.green > 13) return false;
    if (gameSet.blue > 14) return false;
  }

  return true;
};

export const sumAllPossibleGames = (games: Array<Game>): number => {

  let result: number = 0;

  for (const game of games) {
    if (isTheGamePossible(game.sets)) result += game.id;
  }

  return result;
};

export const powerOfFewestNumberOfCubesOfEachColor = (gameSets: Array<GameSet>): number => {
  let red: number = 0;
  let green: number = 0;
  let blue: number = 0;

  for (const set of gameSets) {
    red = Math.max(red, set.red);
    green = Math.max(green, set.green);
    blue = Math.max(blue, set.blue);
  }

  return (red * green * blue);
};

import fs from 'node:fs';

try {
  const data: string = fs.readFileSync('./src/day-2/input.txt', 'utf8');
  const lines: Array<string> = data.split("\n");
  console.log("result part one: ", sumAllPossibleGames(lines.filter(l => l.length > 0).map(convertInputToGame)));
  console.log("result part two: ", lines.filter(l => l.length > 0).map(convertInputToGame).map(g => powerOfFewestNumberOfCubesOfEachColor(g.sets)).reduce((a, b) => a + b));
} catch (err) {
  console.error(err);
}
