import { Container, Row, Col } from 'react-bootstrap';
import ColoredText from '../../ColoredText/ColoredText';
import { IDevelopers } from '../Squeleton/Squeleton';
// Styles
import styles from './Footer.module.scss';

interface IArrayDevelopers {
  developers: IDevelopers[],
}

const Footer = ({
  developers
}: IArrayDevelopers) => {

  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col xs={6}>
            <div className={styles.contDevs}>
              <p className={[styles.text, styles.title].join(' ')}>Desarrollado por:</p>
              {developers.map((dev, index) => (
                <div key={index} className={styles.text}>
                  <ColoredText text={"- "+dev.name} />
                </div>
              ))}
            </div>
          </Col>
          <Col xs={6}>
            <div className={styles.contCollege}>
              <p className={styles.text}>Poligran {new Date().getFullYear()}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
