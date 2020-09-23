import React, { useState } from "react";
import httpRequest from "../../clientsideAPI/httpRequest";
import { Form, Input, Button, Checkbox, Row, Layout } from 'antd';
import { Eye, Mail } from 'react-feather';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Logo from '../Logo/IRXlogo.js';

const layout = { labelCol: { span: 16 }, wrapperCol: { span: 32 }, };
const Content = styled.div`
  max-width: 600px;
  z-index: 2;
  min-width: 400px;
  border: 1px solid #001529;
  border-radius: 5px;
  padding: 10px;
`;

const Login = ({ updateUser }) => {
  const initialState = {
    username: "",
    password: "",
    redirectTo: null,
  };
  const [logInState, setLoginState] = useState(initialState);

  const handleChange = (event) => {
    setLoginState({ ...logInState, [event.target.name]: event.target.value });
  };

  const logIn = async () => {
    try {
      const response = await httpRequest.login({
        username: logInState.username,
        password: logInState.password,
      });

      if (response.status === 200) {
        // update App.js state
        updateUser({
          loggedIn: true,
          username: response.data.username,
        });
        // update the state to redirect to home
        setLoginState({ ...logInState, redirectTo: "/registerEvents" });
      }
    } catch (error) {
      console.log("login error: ");
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    logIn();
  };

  return (
    <div>
      {logInState.redirectTo ? (
        <Redirect to={{ pathname: logInState.redirectTo }} />
      ) : (



        // <div id="__next">
        //     <div className="ant-spin-nested-loading">
        //         <div>
        //             <div className="ant-spin ant-spin-lg ant-spin-spinning ant-spin-show-text">
        //                 <span className="ant-spin-dot ant-spin-dot-spin"><i className="ant-spin-dot-item"></i><i className="ant-spin-dot-item"></i><i className="ant-spin-dot-item"></i><i className="ant-spin-dot-item"></i></span>
        //                 <div className="ant-spin-text">Loading...</div>
        //             </div>
        //         </div></div>


        <Row type="flex" align="middle" justify="center" className="px-3 bg-white mh-page" style={{ minHeight: '100vh'}}>
        <Content>
        <Form {...layout} name="basic" initialValues={{ remember: true }} >

        <div className="text-center mb-8"  style={{backgroundColor: '#001529', textAlign: 'center', paddingTop: 8, paddingBottom: 5}}>
        <a className="brand mr-0"><Logo size={32} strokeWidth={1} style={{backgroundColor: '#001529'}} /></a>
        </div>
        <div className="text-center mb-8">        
        <h5 className="mb-0 mt-3" style={{paddingTop: 10, textAlign: 'center'}}>Sign In to Your HERO Account</h5>
        </div>

        <div style={{padding: 10}}>
        <label class="ant-form-item-required" title="Username"><span className="asterisk" style={{color: '#f5222d'}}>*</span>&nbsp;Username</label>
        <Form.Item className="form-label" htmlFor="username"name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input prefix= { <Mail size={16} strokeWidth={1} style={{ color: 'rgba(0,0,0,.25)' }} /> }
            className="form-input" type="text" id="username" name="username" placeholder="Username" value={logInState.username} onChange={handleChange} />
        </Form.Item>

        <label class="ant-form-item-required" title="Password"><span className="asterisk" style={{color: '#f5222d'}}>*</span>&nbsp;Password</label>
        <Form.Item className="form-label" htmlFor="password" name="password" rules={[{ required: true, message: 'Please input your password!' }]} >
          {/* <Input.Password */}
          <Input prefix= { <Eye size={16} strokeWidth={1} style={{ color: 'rgba(0,0,0,.25)' }} /> }
          className="form-input" placeholder="password" type="password" name="password" value={logInState.password} onChange={handleChange} />
        </Form.Item>
        </div>

        <Form.Item name="remember" valuePropName="checked" style={{textAlign: 'center'}}>
          <Checkbox>Remember me</Checkbox>
          <Link href="/forgot"><a className="text-xs-right"><small>Forgot password</small></a></Link>
        </Form.Item>
        <Form.Item style={{textAlign: 'center'}}>
          <Button type="submit" htmlType="submit" className="mt-3"
          onClick={handleSubmit} value={logInState.username} onChange={handleChange}>Sign In</Button>
        </Form.Item>


        </Form>
        </Content>
        </Row>



      // </div>


      )};
    </div>
  );
};

export default Login;