import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/Navbar';
import styles from './Squeleton.module.scss';

const Squeleton = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <Router>
			<div className={styles.squeleton}>
        <div className={styles.container}>
          <div className={styles.contHeader}>
            <NavBar />
          </div>
          <div className={styles.contBody}>
            <Switch>
              <Route exact path="/">
                <p>aaaa</p>
              </Route>

              <Route exact path="/nomina">
                <span>bbbb</span>
              </Route>
            </Switch>
          </div>
          <div className={styles.contFooter}>
            <Footer />
          </div>
        </div>
			</div>
		</Router>
  );
}
export default Squeleton;
