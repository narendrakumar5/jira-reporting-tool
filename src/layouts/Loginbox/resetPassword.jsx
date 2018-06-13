import React from 'react';
import "../../assets/css/newcss/emailSucess.css";
import { Grid, Row, Col, Table } from 'react-bootstrap'

class resetPassword extends React.Component {
  render() {
    return (
      <Col>
        <Table className="email-wrapper" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">
              <Table className="email-content" width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td className="email-masthead">
                    <a className="email-masthead_name">Jira Reproting Tool</a>
                  </td>
                </tr>

                <tr>
                  <td className="email-body" width="100%">
                    <Table className="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0">

                      <tr>
                        <td className="content-cell">
                          <h1>Enter your email address or your username</h1>

                          <div id="sc-password">
                            <h1>Reset Password</h1>
                            <div className="sc-container">
                              <input type="text" placeholder="Username or Email" />
                              <input type="submit" value="Get New Password" />
                            </div>
                          </div>
                        </td>
                      </tr>

                    </Table>
                  </td>
                </tr>
                <tr>
                  <td className="email-body" width="100%">
                    <Table className="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0">

                      <tr>
                        <td className="content-cell">
                          <h1>Please enter your valid email address or your username</h1>

                          <div id="failed-password">
                            <h1>Reset Failed</h1>
                            <div className="failed-password">
                              <input type="text" placeholder="Username or Email" />
                              <input type="submit" value="Get New Password" />
                            </div>
                          </div>
                        </td>
                      </tr>

                    </Table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Table className="email-footer" align="center" width="570" cellpadding="0" cellspacing="0">
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