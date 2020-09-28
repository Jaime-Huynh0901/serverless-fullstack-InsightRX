import React from "react";
import { Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";
import Logo from "../Logo/IRXlogo.js";
import "./navigation.css";

const { SubMenu } = Menu;

const Navigation = () => {
  return (
    <div>
      <Row
        type="flex"
        align="middle"
        justify="center"
        style={{
          height: 112,
          background: "#183045",
          borderBottom: "8px solid #35bbb1",
        }}
      >
        <Col span={6} style={{ width: "100%", maxWidth: 1200 }}>
          <Row>
            <Col style={{ background: "#183045", margin: "0 auto" }}>
              <Link to="/">
                <Logo />
                <strong className="mx-1 text-white hero">VILLAIN</strong>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col>
              <Menu mode="horizontal" style={{ background: "#183045" }}>
                <Menu.Item>
                  <Link to="/overview" className="ant-menu-item text-white">
                    Dashboard
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/events" className="ant-menu-item text-white">
                    Events
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to="/registerEvents"
                    className="ant-menu-item text-white"
                  >
                    Register
                  </Link>
                </Menu.Item>

                <SubMenu
                  title="</>"
                  className="ant-menu-item text-white"
                  style={{ width: "auto" }}
                >
                  <Menu.Item style={{ background: "#183045" }}>
                    <Link
                      to="/"
                      className="ant-menu-item text-white"
                      style={{ fontSize: "0.85em" }}
                    >
                      Sign Out
                    </Link>
                  </Menu.Item>
                  {/* <Menu.Item style={{background: '#183045'}}><a to="/signupnewvillain" className="ant-menu-item text-white" style={{fontSize: '0.85em'}}>Sign Up</a></Menu.Item> */}
                </SubMenu>
              </Menu>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Navigation;
