import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { leftRefresh,leftWrench,whiteColor,greyColor } from '../../Constants/appConstants';
import { Form,Glyphicon, FormGroup,Checkbox, ControlLabel, FormControl, Label, FormText, Col, Button, ButtonToolbar } from 'react-bootstrap'
class SignUpBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            'name':'',
            'employee_Id':'',
            'email':''
        }
        this.click_register = this.click_register.bind(this);
        this.handle_input_text = this.handle_input_text.bind(this);
        // this.handle_input_text = this.handle_input_text.bind(this);
    }
    
    display_alert(status){
        if(status === '200'){
            alert('you are now registered. Please go to login page')
        } else if(status === '208'){
            alert('you are already registered. Please go to login page')
        } else if(status === '400'){
            alert('some fields are missing. Please try again')
        }
    }

    handle_input_text(e) {
        e.preventDefault();
        const formData = {};
        for (const field in this.refs) {
          formData[field] = this.refs[field].value;
          
        }
        // let input_text = this.state.input_text;
        // input_text[change_val] = e.target.value;
        // this.setState({input_text:input_text});
    }

    click_register(){
        var employee_Id = document.getElementById("employee_Id").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("emailId").value;
        
        }
    render() {
        return (

            <Col id="signup-box" className="signup-box widget-box no-border">
                <Col className="widget-body">
                    <Col className="widget-main">
                        <h4 className="header green lighter bigger">
                            <i className="ace-icon fa fa-users blue"></i>
                            New User Registration
                        </h4>

                        <Col className="space-6"></Col>
                        <p> Enter your details to begin: </p>
                        <Form horizontal onSubmit={this.click_register.bind(this)}>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col sm={12}>
                                <FormControl type="text" placeholder="Employee Id" id="employee_Id"/>
                                    <FormControl.Feedback>
                                        <Glyphicon glyph="envelope" style={greyColor}/>
                                    </FormControl.Feedback>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col sm={12}>
                                <FormControl type="text" placeholder="Name" id="name"/>
                                    <FormControl.Feedback>
                                        <Glyphicon glyph="user" style={greyColor}/>
                                    </FormControl.Feedback>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col sm={12}>
                                    <FormControl type="email" placeholder="Email" id="emailId"/>
                                    <FormControl.Feedback>
                                        <Glyphicon glyph="envelope" style={greyColor}/>
                                    </FormControl.Feedback>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col sm={12}>
                                <Checkbox>&nbsp; I accept the &nbsp; <a href="#">User Agreement</a></Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                            <Col  sm={4}>
                                <Button type="reset" bsSize="small" block>Reset</Button>
                                <FormControl.Feedback>
                                        <Glyphicon glyph="refresh" style={leftRefresh}/>
                                    </FormControl.Feedback>
                                </Col>
                                <Col  sm={8}>
                                <Button type="submit" bsSize="small" block className="btn btn-md btn-success">Register</Button>
                                <FormControl.Feedback>
                                        <Glyphicon glyph="arrow-right" style={whiteColor}/>
                                    </FormControl.Feedback>
                                </Col>
                            </FormGroup>
                        </Form>
                        {/* <form>
                            <fieldset>
                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="text" refs="text" className="form-control" id="employee_Id"  placeholder="Employee Id" onChange={this.handle_input_text}/>
                                        <i className="ace-icon fa fa-envelope"></i>
                                    </span>
                                </label>
                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="text" className="form-control" id="name" placeholder="Name"  onChange={this.handle_input_text}/>
                                        <i className="ace-icon fa fa-user"></i>
                                    </span>
                                </label>

                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="email" className="form-control" id="email" placeholder="Email" onChange={this.handle_input_text}/>
                                        <i className="ace-icon fa fa-user"></i>
                                    </span>
                                </label>

                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="password" className="form-control" placeholder="Password" />
                                        <i className="ace-icon fa fa-lock"></i>
                                    </span>
                                </label>

                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="password" className="form-control" placeholder="Repeat password" />
                                        <i className="ace-icon fa fa-retweet"></i>
                                    </span>
                                </label>

                                <label className="block">
                                    <input type="checkbox" className="ace" />
                                    <span className="lbl">
                                    &nbsp; I accept the &nbsp;
                                        <a href="#">User Agreement</a>
                                    </span>
                                </label>

                                <Col className="space-24"></Col>

                                <Col className="clearfix">
                                    <button type="reset" className="width-30 pull-left btn btn-sm">
                                        <i className="ace-icon fa fa-refresh"></i>
                                        <span className="bigger-110">Reset</span>
                                    </button>

                                    <button type="submit" className="width-65 pull-right btn btn-sm btn-success">
                                        <span className="bigger-110">Register</span>

                                        <i className="ace-icon fa fa-arrow-right icon-on-right"></i>
                                    </button>
                                </Col>
                            </fieldset>
                        </form> */}
                    </Col>

                    <Col className="toolbar center">
                        <a href="#" data-target="#login-box" className="back-to-login-link">
                            <i className="ace-icon fa fa-arrow-left"></i>
                            Back to login
                         </a>
                    </Col>
                </Col>
            </Col>
        )
    }
}
export default SignUpBox