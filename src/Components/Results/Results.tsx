import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import ColoredText from '../ColoredText/ColoredText';
import { GeneralGameContext } from '../Layouts/Squeleton/Squeleton';
// Styles
import styles from './Results.module.scss';

const Results = () => {
  const { gameInProgress, setGameInProgress, progress, setProgress, score, setScore, scoreSystem, gameLevel } = useContext(GeneralGameContext);

  const handlePlayAgain = () => {
    console.log("againa!");
    setProgress(1);
    setScore(0);
    setGameInProgress(false);
  }

  if(!gameInProgress)
    return (
      <Nav.Link
        as={Link}
        to="/"
      >
        <div className={styles.start}>
          <ColoredText text="Click aqui para empezar un juego." />
        </div>
      </Nav.Link>
    )

  return (
    <div id="results" className={styles.results}>
      <Container>
        <Row>
          <Col>
            <div className={styles.container}>
              <div className={styles.title}>
                <ColoredText text="Felicitaciones!" />
              </div>
              <div className={styles.description}>
                <p>Has finalizado el juego de palabras en el nivel <strong>{gameLevel.label}</strong>!</p>
                <p>Tu resumen de juego es el siguiente:</p>
                <ul>
                  <li>Nivel: <strong>{gameLevel.label}</strong>.</li>
                  <li>Palabras realizadas: <strong>{progress}</strong> de <strong>{gameLevel.numberQuestions}</strong>.</li>
                  <li>Puntaje: <strong>{score}pts</strong> de <strong>{gameLevel.numberQuestions*scoreSystem.correct}pts</strong> posibles.</li>
                </ul>
                <p>Vuelve a intentar nuestro reto para obtener un mejor puntaje o subir su nivel de dificultad.</p>
              </div>
              <div className={styles.contButton}>
                <Navbar.Brand
                  as={Link}
                  to="/"
                  style={{margin: 0}}
                  onClick={() => handlePlayAgain()}
                >
                  <div className={styles.button}>
                    <ColoredText text="Jugar de nuevo!" />
                  </div>
                </Navbar.Brand>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Results;
