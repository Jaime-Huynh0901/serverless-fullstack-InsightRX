import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Layout, Menu } from "antd";
import DashHeader from "./DashHeaderStyle";
import Logo from "../Logo/IRXlogo.js";

const { SubMenu } = Menu;
const { Header } = Layout;

const Navigation = () => {
  return (
    <DashHeader>
      <Header>
        <Link to="/">
          <a className="brand">
            <Logo />
            &nbsp;
            <strong className="mx-1 text-white hero">HERO</strong>
          </a>
        </Link>
        <Menu mode="horizontal" className="menu-divider">
          <Menu.Item>
            <Link to="/overview" className="link-color">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/events" className="link-color">
              Events
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/registerEvents" className="link-color">
              Register New Event
            </Link>
          </Menu.Item>
        </Menu>
        <Menu mode="horizontal" className="menu-divider">
          <SubMenu title={<Avatar src="branding/insight_rx_logo_48x48.png" />}>
            <Menu.Item>
              <Link to="/logout">Sign Out</Link>
            </Menu.Item>
            <Menu.Divider />
          </SubMenu>
        </Menu>
      </Header>
    </DashHeader>
  );
};

export default Navigation;

//                 {/* <Link to="/login" data-toggle="modal">Login</Link> */}

//                 {/* {this.props.authenticated ? ( */}

//                 {/* ) : ( */}
//                 {/* <Col><Link to="/logout" data-toggle="modal">Logout</Link></Col> */}
//                 {/* )} */}
