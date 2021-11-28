import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import ColoredText from '../ColoredText/ColoredText';
// Styles
import styles from './Home.module.scss';
import { GeneralGameContext } from '../Layouts/Squeleton/Squeleton';

const Home = () => {
  // Declare a new state variable, which we'll call "count"
  const {
    levels,
    gameLevel,
    setGameLevel,
    setGameInProgress
  } = useContext(GeneralGameContext);

  const handleChange = (id: number) => {
    const levelSelected = levels.find(level => level.id===id);
    setGameLevel(levelSelected===undefined ? levels[0] : levelSelected);
  }

  return (
    <div id="home" className={styles.home}>
      <Container>
        <Row>
          <Col>
            <div className={styles.container}>
              <div className={styles.title}>
                <ColoredText text="Bienvenido!" />
              </div>
              <div className={styles.description}>
                <p>A continuación vas a elegir el nivel de dificultad con el que quieres empezar a jugar!</p>
                <p>La dificultad se clasifica de la siguiente manera:</p>
                <ul>
                  {levels.map(level => (
                    <li key={level.id}>{level.label}: {level.numberQuestions} preguntas</li>
                  ))}
                </ul>
                <p>Para empezar, elije la dificultad:</p>
              </div>
              <div className={styles.contSelect}>
                <select
                  className={styles.select}
                  value={gameLevel.id}
                  onChange={(e) => handleChange(parseInt(e.target.value))}
                >
                  {levels.map((level, index) => (
                    <option
                      key={index}
                      value={level.id}
                    >
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.contButton}>
                <Navbar.Brand
                  as={Link}
                  to="/game"
                  onClick={() => setGameInProgress(true)}
                  style={{margin: 0}}
                >
                  <div className={styles.button}>
                    <ColoredText text="Comenzar!" />
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
export default Home;
