import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import { Link,HashRouter, Route, Switch } from "react-router-dom";

import Dashboard from "../../layouts/Dashboard/Dashboard.jsx";
import indexRoutes from "../../routes/index.jsx";
import SignUpBox from "../../layouts/Loginbox/SignUpBox.jsx";
import ForgotBox from "../../layouts/Loginbox/ForgotBox.jsx";
import LoginHeader from "../../layouts/Loginbox/LoginHeader.jsx";

import { FormInputs } from "../../components/FormInputs/FormInputs.jsx";
import "../../assets/css/newcss/GLmain.css";
import { leftWrench,greyColor } from '../../Constants/appConstants';

// eslint-disable-next-line
import {Grid, Row, Col, Form,Glyphicon, FormGroup,Checkbox, ControlLabel, FormControl, FormText, Button } from 'react-bootstrap'
// eslint-disable-next-line


class LoginBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employee_Id: '',
            password: '',
            token:''
        }
    }

      fetchData(e) {
        e.preventDefault();
        var employee_Id = document.getElementById("loginEmployee_Id").value;
        var password = document.getElementById("loginPassword").value;
        // if(employee_Id === ""){
        //     alert("Please Enter your Employee Id")
        //     $('#loginEmployee_Id').focus()
        //     return false
        // }
        // if(password === ""){
        //     alert("Please enter a Password")
        //     $('#loginPassword').focus()
        //     return false
        // }
        var data= {email: employee_Id,password: password};
        axios.post( "http://localhost:1337/742fc666.ngrok.io/marvel/login",data)
        .then( res => {
          if(!res.data.isSuccess && res.data.isSuccess === true) {
            alert(JSON.stringify("Login  "+res.data.message));
            // this.props.loginSuccess();
          } else if(!res.data.isSuccess && res.data.isSuccess === false) { 
            alert(JSON.stringify(res.data.message));
          }else{
            alert(JSON.stringify("Some neccessary fileds are missing."));
          }
        
        }).catch(function (error) {
            console.log(error);
        });        
    }
    
    render() {
        return (
            <Col>
            <LoginHeader />
                <Col id="login-box" className="login-box visible widget-box no-border">
                    <Col className="widget-body">
                        <Col className="widget-main">
                            <h4 className="header blue lighter bigger">
                                <i className="ace-icon fa fa-coffee green"></i>
                                Please Enter Your Information
                            </h4>

                            <Col className="space-6"></Col>
                            <Form horizontal onSubmit={this.fetchData.bind(this)}>
                                <FormGroup >
                                    <Col sm={12}>
                                    <FormControl type="text" placeholder="Employee Id" id="loginEmployee_Id"/>
                                        <FormControl.Feedback>
                                            <Glyphicon glyph="user" style={greyColor}/>
                                        </FormControl.Feedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup >
                                    <Col sm={12}>
                                    <FormControl type="password" placeholder="password" id="loginPassword"/>
                                        <FormControl.Feedback>
                                            <Glyphicon glyph="lock" style={greyColor}/>
                                        </FormControl.Feedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup >
                                    <Col sm={12}>
                                        <FormControl type="email" placeholder="Email" id="loginEemail"/>
                                        <FormControl.Feedback>
                                            <Glyphicon glyph="envelope" style={greyColor}/>
                                        </FormControl.Feedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col sm={6}>
                                    <Checkbox>&nbsp; Remember me &nbsp;</Checkbox>
                                    </Col>
                                    <Col  sm={6}>
                                    <Button type="submit" bsSize="small" block className="btn btn-md btn-primary">Login</Button>
                                    <FormControl.Feedback>
                                            <Glyphicon glyph="wrench" style={leftWrench}/>
                                    </FormControl.Feedback>
                                    </Col>
                                </FormGroup>
                            </Form>
                            <Col className="space-6"></Col>
                        </Col>

                        <Col className="toolbar clearfix">
                            <Col>
                                {/* <a href="#" data-target="#forgot-box" className="forgot-password-link">
                                    <i className="ace-icon fa fa-arrow-left"></i>
                                    I forgot my password
                                </a> */}
                                <Link to={{
                                    pathname: '/ForgotBox' , query: {
                                        formData: 'nk'//this.state
                                    }
                                }} className="forgot-password-link"><i className="ace-icon fa fa-arrow-left"></i>I forgot my password</Link>
                            </Col>

                            <Col>
                                {/* <a href="#" data-target="#signup-box" className="user-signup-link">
                                    I want to register
                                    <i className="ace-icon fa fa-arrow-right"></i>
                                </a> */}
                                <Link to={{
                                    pathname: '/SignUpBox' , query: {
                                        formData: 'nk'//this.state
                                    }
                                }} className="user-signup-link">I want to register<i className="ace-icon fa fa-arrow-right"></i></Link>
                            </Col>
                        </Col>
                    </Col>
                </Col>
                </Col>
        )
    }
}
export default LoginBox;