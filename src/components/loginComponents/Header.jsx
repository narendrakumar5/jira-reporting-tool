import React from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Label, FormText, Col, Button, ButtonToolbar } from 'react-bootstrap'

class Header extends React.Component{
    render(){
        return(
            <Col id="navbar" className="navbar navbar-default          ace-save-state">
            <Col className="navbar-container ace-save-state" id="navbar-container">
            <button type="button" className="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
                <span className="sr-only">Toggle sidebar</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Col className="navbar-header pull-left">
                <a href="index.html" className="navbar-brand">
                    <small>
							<i className="fa fa-leaf"></i>
							Marvel Reports
					</small>
                </a>
            </Col>
            <Col className="navbar-buttons navbar-header pull-right" role="navigation">
                <ul className="nav ace-nav">
                    <li className="grey dropdown-modal">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <i className="ace-icon fa fa-tasks"></i>
                            <span className="badge badge-grey">4</span>
                        </a>
                        <ul className="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
                            <li className="dropdown-header">
                                <i className="ace-icon fa fa-check"></i> 4 Tasks to complete
                            </li>
                            <li className="dropdown-content">
                                <ul className="dropdown-menu dropdown-navbar">
                                    <li>
                                        <a href="#">
                                            <Col className="clearfix">
                                                <span className="pull-left">Software Update</span>
                                                <span className="pull-right">65%</span>
                                            </Col>

                                            <Col className="progress progress-mini">
                                                <Col style={{width: '65%'}} className="progress-bar"></Col>
                                            </Col>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Col className="clearfix">
                                                <span className="pull-left">Hardware Upgrade</span>
                                                <span className="pull-right">35%</span>
                                            </Col>

                                            <Col className="progress progress-mini">
                                                <Col style={{width: '35%'}} className="progress-bar progress-bar-danger"></Col>
                                            </Col>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <Col className="clearfix">
                                                <span className="pull-left">Unit Testing</span>
                                                <span className="pull-right">15%</span>
                                            </Col>

                                            <Col className="progress progress-mini">
                                                <Col style={{width: '15%'}} className="progress-bar progress-bar-warning"></Col>
                                            </Col>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            <Col className="clearfix">
                                                <span className="pull-left">Bug Fixes</span>
                                                <span className="pull-right">90%</span>
                                            </Col>

                                            <Col className="progress progress-mini progress-striped active">
                                                <Col style={{width: '90%'}} className="progress-bar progress-bar-success"></Col>
                                            </Col>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown-footer">
                                <a href="#">
										See tasks with details
										<i className="ace-icon fa fa-arrow-right"></i>
								</a>
                            </li>
                        </ul>
                    </li>
                    <li className="purple dropdown-modal">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <i className="ace-icon fa fa-bell icon-animated-bell"></i>
                            <span className="badge badge-important">8</span>
                        </a>
                        <ul className="dropdown-menu-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
                            <li className="dropdown-header">
                                <i className="ace-icon fa fa-exclamation-triangle"></i> 8 Notifications
                            </li>
                            <li className="dropdown-content">
                                <ul className="dropdown-menu dropdown-navbar navbar-pink">
                                    <li>
                                        <a href="#">
                                            <Col className="clearfix">
                                                <span className="pull-left">
														<i className="btn btn-xs no-hover btn-pink fa fa-comment"></i>
														New Comments
													</span>
                                                <span className="pull-right badge badge-info">+12</span>
                                            </Col>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="btn btn-xs btn-primary fa fa-user"></i> Bob just signed up as an editor ...
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Col className="clearfix">
                                                <span className="pull-left">
														<i className="btn btn-xs no-hover btn-success fa fa-shopping-cart"></i>
														New Orders
													</span>
                                                <span className="pull-right badge badge-success">+8</span>
                                            </Col>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Col className="clearfix">
                                                <span className="pull-left">
														<i className="btn btn-xs no-hover btn-info fa fa-twitter"></i>
														Followers
													</span>
                                                <span className="pull-right badge badge-info">+11</span>
                                            </Col>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown-footer">
                                <a href="#">
										See all notifications
										<i className="ace-icon fa fa-arrow-right"></i>
								</a>
                            </li>
                        </ul>
                    </li>
                    <li className="green dropdown-modal">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <i className="ace-icon fa fa-envelope icon-animated-vertical"></i>
                            <span className="badge badge-success">5</span>
                        </a>
                        <ul className="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
                            <li className="dropdown-header">
                                <i className="ace-icon fa fa-envelope-o"></i> 5 Messages
                            </li>
                            <li className="dropdown-content">
                                <ul className="dropdown-menu dropdown-navbar">
                                    <li>
                                        <a href="#" className="clearfix">
                                            <img src="./src/assets/images/avatars/avatar.png" className="msg-photo" alt="Alex's Avatar" />
                                            <span className="msg-body">
													<span className="msg-title">
														<span className="blue">Alex:</span> Ciao sociis natoque penatibus et auctor ...
                                            </span>
                                            <span className="msg-time">
														<i className="ace-icon fa fa-clock-o"></i>
														<span>a moment ago</span>
                                            </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="clearfix">
                                            <img src="./src/assets/images/avatars/avatar3.png" className="msg-photo" alt="Susan's Avatar" />
                                            <span className="msg-body">
													<span className="msg-title">
														<span className="blue">Susan:</span> Vestibulum id ligula porta felis euismod ...
                                            </span>
                                            <span className="msg-time">
														<i className="ace-icon fa fa-clock-o"></i>
														<span>20 minutes ago</span>
                                            </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="clearfix">
                                            <img src="./src/assets/images/avatars/avatar4.png" className="msg-photo" alt="Bob's Avatar" />
                                            <span className="msg-body">
													<span className="msg-title">
														<span className="blue">Bob:</span> Nullam quis risus eget urna mollis ornare ...
                                            </span>
                                            <span className="msg-time">
														<i className="ace-icon fa fa-clock-o"></i>
														<span>3:15 pm</span>
                                            </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="clearfix">
                                            <img src="./src/assets/images/avatars/avatar2.png" className="msg-photo" alt="Kate's Avatar" />
                                            <span className="msg-body">
													<span className="msg-title">
														<span className="blue">Kate:</span> Ciao sociis natoque eget urna mollis ornare ...
                                            </span>
                                            <span className="msg-time">
														<i className="ace-icon fa fa-clock-o"></i>
														<span>1:33 pm</span>
                                            </span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="clearfix">
                                            <img src="./src/assets/images/avatars/avatar5.png" className="msg-photo" alt="Fred's Avatar" />
                                            <span className="msg-body">
													<span className="msg-title">
														<span className="blue">Fred:</span> Vestibulum id penatibus et auctor ...
                                            </span>
                                            <span className="msg-time">
														<i className="ace-icon fa fa-clock-o"></i>
														<span>10:09 am</span>
                                            </span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown-footer">
                                <a href="inbox.html">
										See all messages
										<i className="ace-icon fa fa-arrow-right"></i>
								</a>
                            </li>
                        </ul>
                    </li>
                    <li className="light-blue dropdown-modal">
                        <a data-toggle="dropdown" href="#" className="dropdown-toggle">
                            <img className="nav-user-photo" src="./src/assets/images/avatars/user.jpg" alt="Jason's Photo" />
                            <span className="user-info">
									<small>Welcome,</small>
									Jason
							</span>
                            <i className="ace-icon fa fa-caret-down"></i>
                        </a>
                        <ul className="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                            <li>
                                <a href="#">
                                    <i className="ace-icon fa fa-cog"></i> Settings
                                </a>
                            </li>
                            <li>
                                <a href="profile.html">
                                    <i className="ace-icon fa fa-user"></i> Profile
                                </a>
                            </li>
                            <li className="Colider"></li>
                            <li>
                                <a href="#">
                                    <i className="ace-icon fa fa-power-off"></i> Logout
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Col>
        </Col>
        </Col>
        )
    }
}
export default Header;