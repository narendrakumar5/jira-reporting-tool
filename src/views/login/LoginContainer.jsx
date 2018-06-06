import React from 'react';
import "../../assets/css/newcss/GLmain.css";
import $ from 'jquery';
import axios from 'axios';
import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import indexRoutes from "routes/index.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";

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
            employee_Id: '',
            password: '',
            token:''
        }
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        // For initial data
        console.log('Component Did MOUNT!')
        
    }
    onSubmit(e) {
        // this.fetchData();
        e.preventDefault();
        // var employee_Id = document.getElementById("loginEmployee_Id").value;
        // var password = document.getElementById("loginPassword").value;
        // var data= {email: employee_Id,password: password};
        // const { username, password } = this.state;
        // const { history } = this.props;
      
        // this.setState({ error: false });
      
        // if (!(username === 'george' && password === 'foreman')) {
        //   return this.setState({ error: true });
        // }
      
        // // store.set('loggedIn', true);
        // history.push('/dashboard');
        
        if(employee_Id !== '' && password !== '') {
            var employee_Id = document.getElementById("loginEmployee_Id").value;
            var password = document.getElementById("loginPassword").value;
            var data= {email: employee_Id,password: password};
            $.ajax({
                url: 'http://55a26147.ngrok.io/marvel/login',
                // headers: {
                //     'Access-Control-Allow-Origin': '*',
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json' 
                //     },
                type: 'post',
                dataType : "json",
                async: true,
                cache: false,
                timeout: 30000, 
                contentType: "application/x-www-form-urlencoded",
                data: data,                
                success: function(data, status) {
                    console.log("Success!!");
                    console.log(data);
                    console.log(status);
                    // It looks like the page that handles the form returns JSON
                    // Parse the JSON
                    var obj = JSON.parse(data);
                    if(obj.id !== null && obj.id !== '') {
                        alert("Login succeeded");
                        // You should redirect the user too
                        // window.location = 'http://redirecturl.com';
                        // this.props.loginUser();
                    }                    
                }
            });
        }
        else{
             alert("Login failed - Please enter correct employee_Id and Password")   
            } 
      }


    //   axios.post( "http://55a26147.ngrok.io/marvel/login",
    //     { headers: {"Content-Type": "application/json"} } ).then( res => {
        
    //       if(res.data.error) {
        
    //       } else { 
    //         // doAnything( res.data )
    //       }
        
    //     }).catch(function (error) {
    //     //    doAnythingError(error)
    //     });
    // }


    //   fetchData() {
    //     var employee_Id = document.getElementById("loginEmployee_Id").value;
    //     var password = document.getElementById("loginPassword").value;
    //     var data= {email: employee_Id,password: password};
    //     if(employee_Id === ""){
    //         alert("Please Enter your Employee Id")
    //         // employee_Id.focus()
    //         return false
    //     }
    //     if(password === ""){
    //         alert("Please enter a Password")
    //         // password.focus()
    //         return false
    //     }
    //     fetch("http://55a26147.ngrok.io/marvel/login", {
    //         method: "POST",
    //         dataType: "JSON",
    //         // headers: {
    //         //     "Content-Type": "application/json; charset=utf-8",
    //         // },
    //         // contentType: "application/json",
    //         data:data
    //     })
    //         .then((resp) => {
    //             return resp.json()
    //         })
    //         .then((data) => {
    //             this.setState({ token: data.token });
    //         })
    //         .catch((error) => {
    //             console.log(error, "catch the hoop")
    //         })
    // }
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
                            <Form horizontal onSubmit={this.onSubmit.bind(this)}>
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
                                    <FormControl type="password" placeholder="password" id="loginPassword"/>
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