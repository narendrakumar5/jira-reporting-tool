import React from 'react';
import "../../assets/css/newcss/GLmain.css";
import $ from 'jquery';
import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import indexRoutes from "routes/index.jsx";

// eslint-disable-next-line
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import {Grid, Row, Col, Form,Glyphicon, FormGroup,Checkbox, ControlLabel, FormControl, FormText, Button } from 'react-bootstrap'
// eslint-disable-next-line
import { leftWrench,greyColor } from '../../Constants/appConstants';

class LoginBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userEmployee_Id: [],
            employee_Id: '',
            password: ''
        }
    }

    formValidate(){
        var employee_Id = document.getElementById("loginEmployee_Id").value;
        var password = document.getElementById("loginPassword").value;
        var data= {username: employee_Id,password: password};
        
        if( employee_Id === "Test" && password === "Test"){
            // { redirect: true, {path: "/", to: "/dashboard", name: "Dashboard"} }
            // var indexRoutes = [{ path: "/", name: "Home", component: Dashboard }];
            // // alert("Login successfully");
            window.location.href = 'http://localhost:3001/dashboard/';
            // this.props.loginUser();
        }
        else{
         alert("Login failed - Please enter correct employee_Id and Password")   
        }
        }
    

    render() {
        return (
                <Col id="login-box" className="login-box visible widget-box no-border">
                    <Col className="widget-body">
                        <Col className="widget-main">
                            <h4 className="header blue lighter bigger">
                                <i className="ace-icon fa fa-coffee green"></i>
                                Please Enter Your Information
                            </h4>

                            <Col className="space-6"></Col>
                            <Form horizontal onSubmit={this.formValidate.bind(this)}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col sm={12}>
                                    <FormControl type="text" placeholder="Employee Id" id="loginEmployee_Id"/>
                                        <FormControl.Feedback>
                                            <Glyphicon glyph="user" style={greyColor}/>
                                        </FormControl.Feedback>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col sm={12}>
                                    <FormControl type="password" placeholder="Name" id="loginPassword"/>
                                        <FormControl.Feedback>
                                            <Glyphicon glyph="lock" style={greyColor}/>
                                        </FormControl.Feedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalEmail">
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
                                <a href="#" data-target="#forgot-box" className="forgot-password-link">
                                    <i className="ace-icon fa fa-arrow-left"></i>
                                    I forgot my password
                                </a>
                            </Col>

                            <Col>
                                <a href="#" data-target="#signup-box" className="user-signup-link">
                                    I want to register
                                    <i className="ace-icon fa fa-arrow-right"></i>
                                </a>
                            </Col>
                        </Col>
                    </Col>
                </Col>
        )
    }
}
export default LoginBox;