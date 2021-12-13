import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import Game from './Game';
import { GeneralGameContext, ILevel, IScoreSystem } from '../Layouts/Squeleton/Squeleton';

const levels: ILevel[] = [
  {id: 1, numberQuestions: 10, label: "Fácil"},
  {id: 2, numberQuestions: 20, label: "Medio"},
  {id: 3, numberQuestions: 30, label: "Difícil"},
];
const scoreSystem: IScoreSystem = {
  correct: 10,
  wrong: -5
};
const gameLevel:ILevel = {
  id: levels[0].id,
  numberQuestions: levels[0].numberQuestions,
  label: levels[0].label
};
const setGameLevel = () => {};
const setGameInProgress = () => {};
const progress: number = 1;
const setProgress = () => {};
const score: number = 0;
const setScore = () => {};

test('Game: validate possibility to play first time a game.', () => {
  const gameInProgress: boolean = false;
  
  const { getAllByTestId } = render(
    <Router>
      <GeneralGameContext.Provider value={{
        levels,
        scoreSystem,
        gameLevel,
        setGameLevel,
        gameInProgress,
        setGameInProgress,
        progress,
        setProgress,
        score,
        setScore
        }}
      >
        <Game />
      </GeneralGameContext.Provider>
    </Router>
  );
  const game = getAllByTestId('start-button');
  expect(game.length).toBe(1);
});

test('Game: Load the word from words API', () => {
  const gameInProgress: boolean = false;
  
  const { getAllByTestId } = render(
    <Router>
      <GeneralGameContext.Provider value={{
        levels,
        scoreSystem,
        gameLevel,
        setGameLevel,
        gameInProgress,
        setGameInProgress,
        progress,
        setProgress,
        score,
        setScore
        }}
      >
        <Game />
      </GeneralGameContext.Provider>
    </Router>
  );
  const game = getAllByTestId('start-button');
  expect(game.length).toBe(1);
});
