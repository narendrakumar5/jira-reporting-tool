import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Label, FormText, Col, Button, ButtonToolbar } from 'react-bootstrap'
class Footer extends React.Component {
    render() {
        return (
            <Col className="footer">
                <Col className="footer-inner">
                    <Col className="footer-content">
                        <span className="bigger-120">
                            <span className="blue bolder">Marvel Reports</span> Engine &copy; 2017-2018
                        </span>

                        &nbsp; &nbsp;        
            </Col>
                </Col>
            </Col>
        )
    }
}
export default Footer;