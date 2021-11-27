import React, { useState } from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <footer className={styles.Footer}>
      <span>Soy el Footer</span>
    </footer>
  );
}
export default Footer;
