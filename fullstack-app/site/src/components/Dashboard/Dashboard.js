import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { getSession, deleteSession } from "../../utils/login";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // Bindings
    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    const userSession = getSession();

    this.setState({
      session: userSession,
    });
  }

  /**
   * Log user out by clearing cookie and redirecting
   */
  logout() {
    deleteSession();
    this.props.history.push(`/`);
  }

  registerEvent() {
    this.props.push(`/registerEvents`);
  }

  render() {
    return (
      <div className={`${styles.container} animateFadeIn`}>
        <div className={styles.containerInner}>
          {/* Navigation */}

          <div className={styles.navigationContainer}>
            <div className={`link`}>
              {this.state.session ? this.state.session.userEmail : ""}
            </div>
            <div className={`link`} onClick={this.logout}>
              <a>logout</a>
            </div>
            <div>
              <Link to="/Overview">Villain</Link>
            </div>
          </div>

          {/* Content */}

          <div className={`${styles.contentContainer}`}>
            <div className={`${styles.artwork} animateFlicker`}>
              <img
                draggable="false"
                src={"./insight-rx-logo.png"}
                alt="Insight RX Logo"
              />
            </div>

            <div className={`${styles.welcomeMessage}`}>
              Welcome to your IRX Villain application
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
