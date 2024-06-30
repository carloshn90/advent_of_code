import test from "node:test";
import { convertInputToGame, convertInputToGameSet, Game, GameSet, powerOfFewestNumberOfCubesOfEachColor, sumAllPossibleGames } from "../../src/day-2/cube-conundrum";
import assert from "node:assert/strict";

test("convertInput", () => {
  const expectedGameSets: Array<GameSet> = [
    // red, green, blue
    new GameSet(4, 0, 3),
    new GameSet(1, 2, 6),
    new GameSet(0, 2, 0)
  ];

  const result: Game = convertInputToGame("Game 101: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green");

  assert.deepEqual(new Game(101, expectedGameSets), result);
});

test("convertInputToGameSet", () => {
  const result: GameSet = convertInputToGameSet(" 3 blue, 4 red, 2 green");

  assert.deepEqual(new GameSet(4, 2, 3), result);
});

test("sumAllPossibleGames", () => {
  const games: Array<Game> = [
    // red, green, blue
    new Game(1, [new GameSet(4, 0, 3), new GameSet(1, 2, 6), new GameSet(0, 2, 0)]),
    new Game(2, [new GameSet(0, 2, 1), new GameSet(1, 3, 4), new GameSet(0, 1, 1)]),
    new Game(3, [new GameSet(20, 8, 6), new GameSet(4, 13, 5), new GameSet(1, 5, 0)]),
    new Game(4, [new GameSet(3, 1, 6), new GameSet(6, 3, 0), new GameSet(14, 3, 15)]),
    new Game(5, [new GameSet(6, 3, 1), new GameSet(1, 2, 2)])
  ];
  const result: number = sumAllPossibleGames(games);

  assert.equal(8, result);
});

test("powerOfFewestNumberOfCubesOfEachColor", () => {

  const result: number = powerOfFewestNumberOfCubesOfEachColor([new GameSet(4, 0, 3), new GameSet(1, 2, 6), new GameSet(0, 2, 0)]);

  assert.equal(48, result);
});
