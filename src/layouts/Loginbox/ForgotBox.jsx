import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import LoginHeader from './LoginHeader';
// import LoginBox from '../../views/login/LoginContainer';
import { Link, withRouter } from "react-router-dom";
import { leftWrench, greyColor } from '../../Constants/appConstants';
import { Form, Glyphicon, FormGroup, FormControl, Col, Button } from 'react-bootstrap';

import "../../assets/css/newcss/GLmain.css";


class ForgotBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'name': '',
            'employee_Id': '',
            'email': ''
        }
        this.forgotPassword = this.forgotPassword.bind(this);
        // this.handle_input_text = this.handle_input_text.bind(this);
    }
    forgotPassword() {
        var email = document.getElementById("emailId").value;
        var data = {email: email };
        axios.put("http://localhost:1337/acf3bf9a.ngrok.io/marvel/registration", data)
            .then(res => {
                if (res.data.isSuccess !== null && res.data.isSuccess === true) {
                    if(res.data.message === "User Exists"){
                        alert("Already " + res.data.message + "!");
                        this.props.history.push('/SignUpBox');
                        $( "#resetButton" ).trigger( "click" );
                        return false;
                    }
                    alert("registration " + res.data.message);
                    this.props.history.push('/resetPassword');
                    // this.props.loginUser();
                } else if (res.data.isSuccess !== null && res.data.isSuccess === false) {
                    alert("registration " + res.data.message);
                    // alert(JSON.stringify("Some neccessary fileds are missing."));
                }

            }).catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Col sm={12} className="bg-color">
                <Col sm={4}></Col>
                <Col sm={4} className="center">
                <LoginHeader/>
                    <Col id="forgot-box" className="forgot-box widget-box no-border">
                        <Col className="widget-body">
                            <Col className="widget-main">
                                <h4 className="header red lighter bigger">
                                    <i className="ace-icon fa fa-key"></i>
                                    Retrieve Password
						</h4>

                                <Col className="space-6"></Col>
                                <p>
                                    Enter your email and to receive instructions
						</p>
                                <Form horizontal onSubmit={this.forgotPassword.bind(this)}>
                                    <FormGroup>
                                        <Col sm={12}>
                                            <FormControl type="text" placeholder="Enter your Email" id="emailId" />
                                            <FormControl.Feedback>
                                                <Glyphicon glyph="envelope" style={greyColor} />
                                            </FormControl.Feedback>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col sm={6}></Col>
                                        <Col sm={6}>
                                            <Button type="submit" bsSize="small" block className="btn btn-md btn-danger right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Send Me!</Button>
                                            <FormControl.Feedback>
                                                <Glyphicon glyph="hand-right" style={leftWrench} />
                                            </FormControl.Feedback>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Col>

                            <Col className="toolbar center">
                                <Link to={{ pathname: '/' }} className="back-to-login-link">
                                    <i className="ace-icon fa fa-arrow-left"></i>
                                    Back to login
                                </Link>
                            </Col>
                        </Col>
                    </Col>
                </Col>
            </Col>

        )
    }
}
export default withRouter(ForgotBox);