import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Link, withRouter } from "react-router-dom";
import LoginHeader from './LoginHeader';
// import LoginBox from '../../views/login/LoginContainer';
// import ForgotBox from './ForgotBox';
// import TopHeader from './TopHeader';
import "../../assets/css/newcss/GLmain.css";



import { leftRefresh, whiteColor, greyColor } from '../../Constants/appConstants';
import { Form, Glyphicon, FormGroup, Checkbox, FormControl, Col, Button } from 'react-bootstrap'
class SignUpBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'name': '',
            'employee_Id': '',
            'password': ''
        }
        this.userRegistration = this.userRegistration.bind(this);
        this.handle_input_text = this.handle_input_text.bind(this);
        // this.handle_input_text = this.handle_input_text.bind(this);
    }

    display_alert(status) {
        if (status === '200') {
            alert('you are now registered. Please go to login page')
        } else if (status === '208') {
            alert('you are already registered. Please go to login page')
        } else if (status === '400') {
            alert('some fields are missing. Please try again')
        }
    }

    handle_input_text(e) {
        e.preventDefault();
        const formData = {};
        const change_val = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;

        }
        let input_text = this.state.input_text;
        input_text[change_val] = e.target.value;
        this.setState({input_text:input_text});
    }

    userRegistration(e) {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("employee_Id").value;
        var password = document.getElementById("password").value;
        var data = { name: name,email: email,  password: password };
        axios.post("http://localhost:1337/acf3bf9a.ngrok.io/marvel/registration", data)
            .then(res => {
                if (res.data.isSuccess !== null && res.data.isSuccess === true) {
                    if(res.data.message === "User Exists"){
                        alert("Already " + res.data.message + "!");
                        this.props.history.push('/SignUpBox');
                        $( "#resetButton" ).trigger( "click" );
                        return false;
                    }
                    alert("registration " + res.data.message);
                    this.props.history.push('/emailSucess');
                    // this.props.loginUser();
                } else if (res.data.isSuccess !== null && res.data.isSuccess === false) {
                    alert("Registration " + res.data.message+ "!");
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
                    <Col id="signup-box" className="signup-box widget-box no-border">
                        <Col className="widget-body">
                            <Col className="widget-main">
                                <h4 className="header green lighter bigger">
                                    <i className="ace-icon fa fa-users blue"></i>
                                    New User Registration
                        </h4>

                                <Col className="space-6"></Col>
                                <p> Enter your details to begin: </p>
                                <Form horizontal onSubmit={this.userRegistration.bind(this)}>
                                    <FormGroup >
                                        <Col sm={12}>
                                            <FormControl type="text" placeholder="Name" id="name" />
                                            <FormControl.Feedback>
                                                <Glyphicon glyph="user" style={greyColor} />
                                            </FormControl.Feedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col sm={12}>
                                            <FormControl type="text" placeholder="Employee Id" id="employee_Id" />
                                            <FormControl.Feedback>
                                                <Glyphicon glyph="envelope" style={greyColor} />
                                            </FormControl.Feedback>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col sm={12}>
                                            <FormControl type="password" placeholder="password" id="password" />
                                            <FormControl.Feedback>
                                                <Glyphicon glyph="envelope" style={greyColor} />
                                            </FormControl.Feedback>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col sm={12}>
                                            <Checkbox>&nbsp; I accept the &nbsp; <a href="#">User Agreement</a></Checkbox>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col sm={4}>
                                            <Button type="reset" bsSize="small" id="resetButton" block>Reset</Button>
                                            <FormControl.Feedback>
                                                <Glyphicon glyph="refresh" style={leftRefresh} />
                                            </FormControl.Feedback>
                                        </Col>
                                        <Col sm={8}>
                                            <Button type="submit" bsSize="small" block className="btn btn-md btn-success">Register</Button>
                                            <FormControl.Feedback>
                                                <Glyphicon glyph="arrow-right" style={whiteColor} />
                                            </FormControl.Feedback>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Col>

                            <Col className="toolbar center">
                                <Link to={{ pathname: '/' }} className="back-to-login-link">
                                    <i className="ace-icon fa fa-arrow-left"></i>
                                    I forgot my password
                                </Link>
                            </Col>
                        </Col>
                    </Col>
                </Col>
                <Col sm={4}></Col>
            </Col>
        )
    }
}
export default withRouter(SignUpBox);