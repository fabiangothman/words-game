import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container, Row, Col, Spinner, Button, Nav } from 'react-bootstrap';
import ColoredText from '../ColoredText/ColoredText';
import { GeneralGameContext } from '../Layouts/Squeleton/Squeleton';
// Styles
import styles from './Game.module.scss';

const Game = () => {
  const { gameInProgress, progress, setProgress, score, setScore, scoreSystem, gameLevel } = useContext(GeneralGameContext);

  const [word, setWord] = useState<string[]>([]);
  const [wordInNumbers, setWordInNumbers] = useState<(number | null)[]>([]);
  const [userText, setUserText] = useState<string>("");
  const [correctWord, setCorrectWord] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [enableFinishButton, setEnableFinishButton] = useState<boolean>(false);

  const formatText = (text: string): string => {
    return text.split("").map(char => {
      return (char==="ñ" || char==="Ñ") ? char : char.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }).join("").toLowerCase();
  } 

  const loadNewWord = () => {
    return new Promise((resolve, reject) => {
      resolve(axios.get(`https://palabras-aleatorias-public-api.herokuapp.com/random`).then(res => {
         const data: string = res.data.body.Word;
        // const data = "viñedo";
        const wordLower: string[] = formatText(data).split("");
        setWord(wordLower);
        return wordLower;
      }).then(word => {
        const wordNums: (number | null)[] = word.map(char => {
          if(char === " ")
            return null;
          else if(char === "ñ" || char==="Ñ")
            return 15;
          else if ((char.charCodeAt(0) - 96) > 14){
            return (char.charCodeAt(0) - 96)+1;
          }else
            return char.charCodeAt(0) - 96;
        });
        setWordInNumbers(wordNums);
        return wordNums;
      }).catch(e => {
        reject(e);
      }));
    });
  }

  const handleFormatText = (text: string) => {
    const formattedText: string = formatText(text);
    setUserText(formattedText);
  }

  const validateWord = () => {
    const correct = userText === word.join('') ? true : false;
    if(correct){
      setScore(score+scoreSystem.correct);
      setCorrectWord(true);
    }else{
      setScore(score+scoreSystem.wrong);
    }
  }

  const nextWord = () => {
    loadNewWord().then(() => {
      setUserText("");
      const newProgress = progress+1;
      setProgress(newProgress);
      setCorrectWord(false);
      if(isLastQuestion(newProgress))
        setEnableFinishButton(true);
    });
  }

  const isLastQuestion = (currQuestion: number) => (currQuestion===gameLevel.numberQuestions) ? true : false;

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if(firstLoad){
      setFirstLoad(false);
      loadNewWord();
    }
  }, []);

  if(!gameInProgress)
    return (
      <Nav.Link
        as={Link}
        to="/"
      >
        <div data-testid="start-button" className={styles.start}>
          <ColoredText text="Click aqui para empezar un juego." />
        </div>
      </Nav.Link>
    )

  return (
    <div id="game" className={styles.game}>
      <Container>
        <Row>
          <Col>
            <div className={styles.container}>
              {(word.length === 0) ? (
                <div data-testid="loading" className={styles.loading}>
                  <Spinner animation="border" variant="success" />
                </div>
              ): (
                <div className={styles.content}>
                  <p>La palabra que tendrás que descifrar a su correspondiente letra del abecedario aparecerá a continuación.</p>
                  <div className={styles.contWord}>
                    {wordInNumbers.map((char, index) => (
                      <div
                        key={index}
                        className={styles.word}
                      >
                        {char}
                      </div>
                    ))}
                    <hr />
                    {word.map((char, index) => (
                      <div
                        key={index}
                        className={[styles.word, styles.disabled].join(" ")}
                      >
                        {char}
                      </div>
                    ))}
                  </div>

                  <div className={styles.warnings}>
                    <p>Ten en cuenta:</p>
                    <ul>
                      <li>Podrán haber palabras compuestas por dos o mas palabras, recuerda usar el espacio.</li>
                    </ul>
                  </div>

                  <p>Ingresa la palabra descifrada a continuación:</p>
                  <div className={styles.contInput}>
                    <input
                      type="text"
                      className={styles.input}
                      value={userText}
                      onChange={(e) => handleFormatText(e.target.value)}
                      disabled={correctWord ? true : false}
                    />
                    <div className={styles.contButtonValidate}>
                      <Button
                        variant="dark"
                        size="lg"
                        onClick={() => validateWord()}
                        disabled={correctWord ? true : false}
                      >
                        <span>Validar</span>
                      </Button>
                    </div>
                  </div>
                  
                  <div className={styles.contButtonNext}>
                    {enableFinishButton ? (
                      <Nav.Link
                        as={Link}
                        to="/results"
                        disabled={correctWord ? false : true}
                      >
                        <Button
                          variant="danger"
                          size="lg"
                          disabled={correctWord ? false : true}
                        >
                          <span>Finalizar!</span>
                        </Button>
                      </Nav.Link>
                    ) : (
                      <Button
                        variant="success"
                        size="lg"
                        disabled={correctWord ? false : true}
                        onClick={() => nextWord()}
                      >
                        <span>Siguiente</span>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Game;
