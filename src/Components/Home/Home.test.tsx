import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import Home from './Home';
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
const gameInProgress: boolean = false;
const setGameInProgress = () => {};
const progress: number = 1;
const setProgress = () => {};
const score: number = 0;
const setScore = () => {};

test('Home: validate possibility to choose the different game levels', () => {
  
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
        <Home />
      </GeneralGameContext.Provider>
    </Router>
  );
  const linkElement = screen.getByText(/elije la dificultad/i);
  expect(linkElement).toBeInTheDocument();
});
