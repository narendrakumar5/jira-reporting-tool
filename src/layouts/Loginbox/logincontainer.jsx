import React from 'react';
import LoginHeader from './LoginHeader';
import LoginBox from '../../views/login/LoginContainer';
import ForgotBox from './ForgotBox';
import TopHeader from './TopHeader';
import SignUpBox from './SignUpBox';
import { Col} from 'react-bootstrap'
class LoginContainer extends React.Component {
  render() {
    return (
      <Col className="login-layout">
        <Col className="main-container">
          <Col className="main-content">
            <Col className="row">
              <Col className="col-sm-10 col-sm-offset-1">
                <Col className="login-container">
                  <Col className="space-6"></Col>
                  <Col className="position-relative">
                      <LoginHeader />
                      <LoginBox/>
                      <ForgotBox/>
                      <SignUpBox/>
                      <TopHeader/>
                    </Col>
                    </Col>
                  </Col>
                </Col>
              </Col>
            </Col>
          </Col>
          );
       }
    }
export default LoginContainer;