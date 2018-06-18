import React from 'react';
import "../../assets/css/newcss/emailSucess.css";
import { Grid, Row, Col, Table, Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';
import { Link } from "react-router-dom";


class resetPassword extends React.Component {


  resetPassword() {
    this.props.history.push('/');
    var email = document.getElementById("Username_or_Email").value;
    var data = { email: email };
    // axios.put("http://localhost:1337/5b180134.ngrok.io/marvel/resetPassword", data)
    //   .then(res => {
    //     if (res.data.isSuccess !== null && res.data.isSuccess === true) {
    //       if (res.data.message === "User Exists") {
    //         alert("Already " + res.data.message + "!");
    //         this.props.history.push('/');
    //         return false;
    //       }
    //       alert("registration " + res.data.message);
    //       this.props.history.push('/resetPassword');
    //     } else if (res.data.isSuccess !== null && res.data.isSuccess === false) {
    //       alert("registration " + res.data.message);
    //     }

    //   }).catch(function (error) {
    //     console.log(error);
    //   });
  }
  render() {
    var TableBackground = {
      background: '#F5F7F9'
    };
    return (
      <Col>
        <Table className="email-wrapper" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <Table className="email-content text-center" width="100%" style={TableBackground} cellpadding="0" cellspacing="0">

                <tr>
                  <td className="email-masthead">
                    <a className="email-masthead_name">Jira Reproting Tool</a>
                  </td>
                </tr>

                <tr>
                  <td className="email-body" width="100%">
                    <Table className="email-body_inner" cellpadding="0" cellspacing="0">

                      <tr>
                        <td className="content-cell">
                          <h1>Enter your email address or your username</h1>

                          <Col id="sc-password">
                            <h1>Reset Password</h1>
                            <Col className="sc-container">
                              <FormGroup >
                                <Col sm={3}>
                                  <FormControl type="text" placeholder="Username or Email" id="Username_or_Email" />
                                  <FormControl.Feedback>

                                  </FormControl.Feedback>
                                </Col>
                                <Col sm={3}>
                                  <Button type="button" onClick={this.resetPassword.bind(this)} bsSize="small" block className="btn btn-md btn-primary">
                                    Send password
                                </Button>
                                </Col>
                              </FormGroup>

                            </Col>
                          </Col>
                        </td>
                      </tr>

                    </Table>
                  </td>
                </tr>
                {/* <tr className="hide">
                  <td className="email-body hide" width="100%">
                    <Table className="email-body_inner"  cellpadding="0" cellspacing="0">

                      <tr>
                        <td className="content-cell">
                          <h1>Please enter your valid email address or your username</h1>

                          <Col id="failed-password" sm={12}>
                            <h1>Reset Failed</h1>
                            <Col className="failed-password" sm={4}>
                              <input type="text" placeholder="Username or Email" />
                              <input type="submit" value="Get New Password" />
                            </Col>
                          </Col>
                        </td>
                      </tr>

                    </Table>
                  </td>
                </tr> */}
                <tr>
                  <td>
                    <Table className="email-footer" style={TableBackground} align="center" width="570" cellpadding="0" cellspacing="0">
                      <tr>
                        <td className="content-cell">
                          <p className="sub center">
                            GL Team
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </td>
                </tr>
              </Table>
            </td>
          </tr>
        </Table>
      </Col>
    )
  }
}
export default resetPassword