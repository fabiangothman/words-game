import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import Results from './Results';
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

test('Results: validate possibility to play first time a game.', () => {
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
        <Results />
      </GeneralGameContext.Provider>
    </Router>
  );
  const results = getAllByTestId('start-button');
  expect(results.length).toBe(1);
});

test('Results: validate possibility to play again the game with game ended', () => {
  const gameInProgress: boolean = true;
  
  render(
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
        <Results />
      </GeneralGameContext.Provider>
    </Router>
  );
  const linkElement = screen.getByText(/Has finalizado el juego de palabras/i);
  expect(linkElement).toBeInTheDocument();
});
