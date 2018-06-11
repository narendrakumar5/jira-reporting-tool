import React from 'react';
import { Grid, Row, Col, Table,Tr , Td,Form, Glyphicon, FormGroup, Checkbox, ControlLabel, FormControl, FormText, Button } from 'react-bootstrap'

class emailSucess extends React.Component {
  render() {
    return (
      <Col>
        <Table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0">
          <Tr>
            <Td align="center">
              <Table class="email-content" width="100%" cellpadding="0" cellspacing="0">
                {/* <!-- Logo --> */}
          <Tr>
                  <Td class="email-masthead">
                    <a class="email-masthead_name">Jira Reproting Tool</a>
                  </Td>
                </Tr>
                {/* <!-- Email Body --> */}
          <Tr>
                  <Td class="email-body" width="100%">
                    <Table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0">
                      {/* <!-- Body content --> */}
                <Tr>
                        <Td class="content-cell">
                          <h1>Verify your email address</h1>
                          <p>Thanks for signing up for Jira Reproting Tool! We're excited to have you as an early user.</p>
                          {/* <!-- Action --> */}
                    <Table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0">
                            <Tr>
                              <Td align="center">
                                <Col>
                                 
                            <center style="color:#ffffff;font-family:sans-serif;font-size:15px;">Verify Email</center>
                          
                            <a href="{{action_url}}" class="button button--blue">Verify Email</a>
                          </Col>
                        </Td>
                      </Tr>
                    </Table>
                        <p>Thanks,GL Team</p>
                          
                          
                  </Td>
                      </Tr>
                      <Tr>
                        <Td class="content-cell">
                          <h1>Email not Verify</h1>
                          <p>Please enter your valid email id.</p>
                    <Table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0">
                            <Tr>
                              <Td align="center">
                                <Col>
                                 
                            <center style="color:#ffffff;font-family:sans-serif;font-size:15px;">Verify Email</center>
                         
                            <a href="{{action_url}}" class="button button--red">Email not registered </a>
                          </Col>
                        </Td>
                      </Tr>
                    </Table>
                        <p>Thanks,GL Team</p>
                    <Table class="body-sub">
                            <Tr>
                              <Td>
                                <p class="sub">If you’re having Trouble clicking the button, copy and paste the URL below into your web browser.
                          </p>
                                <p class="sub"><a href="{{action_url}}"></a></p>
                              </Td>
                            </Tr>
                          </Table>
                  </Td>
                      </Tr>
                    </Table>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0">
                      <Tr>
                        <Td class="content-cell">
                          <p class="sub center">
                            GL Team
                    </p>
                        </Td>
                      </Tr>
                    </Table>
                  </Td>
                </Tr>
              </Table>
            </Td>
          </Tr>
        </Table>
      </Col>
    )
  }
}
export default emailSucess