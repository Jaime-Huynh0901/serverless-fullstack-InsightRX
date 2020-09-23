import React from "react";
import IRXLOGO from "../../branding/insightrx_logo_white_teal_920x207.png";
import "./IRXlogo.css";

class Logo extends React.Component {
  render() {
    return <img src={IRXLOGO} alt="InsightRX logo" className="irxlogo" />;
  }
}

export default Logo;
