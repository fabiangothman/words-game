import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GeneralGameContext } from '../Layouts/Squeleton/Squeleton';
// Styles
import styles from './ScoreBar.module.scss';

const ScoreBar = () => {
  // Declare a new state variable, which we'll call "count"
  const {
    gameInProgress,
    gameLevel,
    progress,
    score
  } = useContext(GeneralGameContext);

  return (
    <div id="scorebar" className={styles.scorebar}>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <span>Nivel: {gameInProgress ? gameLevel.label : 'N/A'}
            </span>
          </Col>
          <Col xs={6} md={4}>
            <span>Progreso: {gameInProgress ? progress+'/'+gameLevel.numberQuestions : '0/0'}</span>
          </Col>
          <Col xs={6} md={4}>
            <span>Puntaje: {gameInProgress ? score : '0'}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ScoreBar;
