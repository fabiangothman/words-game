import { Container, Row, Col } from 'react-bootstrap';
import ColoredText from '../ColoredText/ColoredText';
import { IDevelopers } from '../Layouts/Squeleton/Squeleton';
// Styles
import styles from './About.module.scss';

interface IArrayDevelopers {
  developers: IDevelopers[],
}

const About = ({
  developers
}: IArrayDevelopers) => {

  return (
    <div id="about" className={styles.about}>
      <Container>
        <Row>
          <Col>
            <div className={styles.container}>
              <div className={styles.title}>
                <ColoredText text="Juego de palabras!" />
              </div>
              <div className={styles.description}>
                <p>Este juego fue desarrollado por:</p>
                <ul>
                  {developers.map((dev, index) => (
                    <li key={index}>
                      <a href={dev.url} target="_blank" rel="noreferrer">
                        <ColoredText text={dev.name} />
                      </a>
                  </li>
                  ))}
                </ul>
                <p>Cualquier duda o comentario puedes escribirnos directamente.</p>
                <p>Poligran {new Date().getFullYear()}.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default About;
