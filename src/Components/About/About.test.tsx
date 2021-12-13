import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import About from './About';
import { GeneralGameContext, IDevelopers, ILevel, IScoreSystem } from '../Layouts/Squeleton/Squeleton';

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
const developers: IDevelopers[] = [
  { name: "Fabián Murillo", url: "https://www.linkedin.com/in/fabian-murillo-dev/" },
  { name: "Brayan Duque", url: "" },
];
const setGameLevel = () => {};
const setGameInProgress = () => {};
const progress: number = 1;
const setProgress = () => {};
const score: number = 0;
const setScore = () => {};

test('About: validate show project developers.', () => {
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
        <About developers={developers} />
      </GeneralGameContext.Provider>
    </Router>
  );
  const linkElement = screen.getByText(/Este juego fue desarrollado por/i);
  expect(linkElement).toBeInTheDocument();
});
