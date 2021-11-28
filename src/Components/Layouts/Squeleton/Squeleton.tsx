import React, { createContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import About from '../../About/About';
import Game from '../../Game/Game';
import Home from '../../Home/Home';
import Results from '../../Results/Results';
import ScoreBar from '../../ScoreBar/ScoreBar';
import Footer from '../Footer/Footer';
import NavBars from '../NavBar/NavBars';
// Styles
import styles from './Squeleton.module.scss';

interface IContextProps {
  levels: ILevel[],
  scoreSystem: IScoreSystem,
	gameLevel: ILevel,
	setGameLevel: Function,
	gameInProgress: boolean,
  setGameInProgress: Function,
	progress: number,
  setProgress: Function,
	score: number,
  setScore: Function
}
export const GeneralGameContext = createContext({} as IContextProps);

export interface ILevel {
  id: number,
  numberQuestions: number,
  label: string,
}
export interface IScoreSystem {
  correct: number,
  wrong: number,
}
export interface IDevelopers {
  name: string,
  url: string,
};

const Squeleton = () => {
  const levels: ILevel[] = [
    {id: 1, numberQuestions: 10, label: "Fácil"},
    {id: 2, numberQuestions: 20, label: "Medio"},
    {id: 3, numberQuestions: 30, label: "Difícil"},
  ];
  const scoreSystem: IScoreSystem = {
    correct: 10,
    wrong: -5
  };
  const [gameLevel, setGameLevel] = useState<ILevel>({
    id: levels[0].id,
    numberQuestions: levels[0].numberQuestions,
    label: levels[0].label
  });
  const [gameInProgress, setGameInProgress] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(1);
  const [score, setScore] = useState<number>(0);



  const developers: IDevelopers[] = [
    { name: "Fabián Murillo", url: "https://www.linkedin.com/in/fabian-murillo-dev/" },
    { name: "Brayan Duque", url: "" },
  ];

  return (
    <div id="squeleton" className={styles.squeleton}>
      <Router>
        <div className={styles.container}>
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
            <div className={styles.contHeader}>
              <NavBars />
              <ScoreBar />
            </div>
            <div className={styles.contBody}>
                <Container>
                  <Row>
                    <Col>
                      <Switch>
                        <Route exact path="/">
                          <Home />
                        </Route>

                        <Route exact path="/game">
                          <Game />
                        </Route>

                        <Route exact path="/results">
                          <Results />
                        </Route>

                        <Route exact path="/about">
                          <About developers={developers} />
                        </Route>
                      </Switch>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className={styles.contFooter}>
              <Footer developers={developers} />
            </div>
          </GeneralGameContext.Provider>
        </div>
      </Router>
    </div>
  );
}
export default Squeleton;
