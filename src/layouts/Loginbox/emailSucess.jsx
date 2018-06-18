import React from 'react';
import "../../assets/css/newcss/emailSucess.css";
import { Grid, Row, Col, Table} from 'react-bootstrap'
import { Link} from "react-router-dom";

class emailSucess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        'name': ''
    }   
}

  render() {
    var TableBackground = {
      background:'#F5F7F9'
    };
    var DivBackground = {
      background:'#F5F7F9',
      height: '99% !important'
    };
    return (
      <Col style={DivBackground}>
        <Table className="email-wrapper" >
          <tr>
            <td align="center">
              <Table className="email-content" width="100%" style={TableBackground} cellPadding="0" cellSpacing="0">
                <tr>
                  <td className="email-masthead">
                    <a className="email-masthead_name">Jira Reproting Tool</a>
                  </td>
                </tr>
                <tr>
                  <td className="email-body" width="100%">
                    <Table className="email-body_inner" align="center" width="570" cellPadding="0" cellSpacing="0">
                      <tr>
                        <td className="content-cell">
                          <h1>Verify your email address</h1>
                          <p>Thanks for signing up for Jira Reproting Tool! We're excited to have you as an early user.</p>
                          <Table className="body-action" align="center" width="100%" cellPadding="0" cellSpacing="0">
                            <tr>
                              <td align="center">
                                <Col>

                                  <Link to={{
                                    pathname: '/'
                                }} className="user-signup-link button button--blue">Verify Email</Link>
                                  
                                </Col>
                              </td>
                            </tr>
                          </Table>
                          <p>Thanks,GL Team</p>
                        </td>
                      </tr>
                      <tr className="hide">
                        <td className="content-cell">
                          <h1>Email not Verify</h1>
                          <p>Please enter your valid email id.</p>
                          <Table className="body-action" align="center" width="100%" cellPadding="0" cellSpacing="0">
                            <tr>
                              <td align="center">
                                <Col>

                                  <center>Verify Email</center>

                                  <a href="{{action_url}}" className="button button--red">Email not registered </a>
                                </Col>
                              </td>
                            </tr>
                          </Table>
                          <p>Thanks,GL Team</p>
                          <Table className="body-sub" style={TableBackground}>
                            <tr>
                              <td>
                                <p className="sub">If you’re having trouble clicking the button, copy and paste the URL below into your web browser.
                              </p>
                                <p className="sub"><a href="{{action_url}}"></a></p>
                              </td>
                            </tr>
                          </Table>
                        </td>
                      </tr>
                    </Table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Table className="email-footer" style={TableBackground} align="center" width="570" cellPadding="0" cellSpacing="0">
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
export default emailSucess;