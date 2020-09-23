import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./Home.module.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <div className={`${styles.container} animateFadeIn`}>
        <div className={styles.containerInner}>
          {/* Hero Artwork */}
          <div className={`${styles.heroArtwork}`}>
            <img
              draggable="false"
              src={"./insight-rx-logo.png"}
              alt="Insight RX logo"
            />
          </div>
          {/* <div className={`${styles.heroTitle}`}>
            <img
              draggable="false"
              src={"./insight-rx-logo.png"}
              alt="Insight RX logo"
            />
          </div> */}
          {/* Hero Description */}
          <div className={`${styles.heroDescription}`}></div>
          Welcome to Insight RX Villain App. Start tracking your user event now!
          {/* Call To Action */}
          <div className={`${styles.containerCta}`}>
            <Link to="/register">
              <button className={`buttonPrimaryLarge`}>Register</button>
            </Link>

            <Link to="/login" className={`${styles.linkSignIn}`}>
              sign-in
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
