import React, { Component } from "react";
import {Router, Route, Switch, Redirect } from "react-router-dom";
import NotificationSystem from "react-notification-system";

import Dashboard from "../../views/Dashboard/Dashboard";
import LoginContainer from '../../components/login/LoginContainer'

import dashboardRoutes from "routes/dashboard.jsx";
import logincontainerRoutes from "routes/logincontainerRoutes.jsx";
import {mainPanelWidth } from '../../Constants/appConstants';

class Logincontainer extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      username: null,
      password:null
    };
  }
  componentDidMount() {
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  render() {
    return (
      <div className="wrapper">
        <div id="main-panel" className="main-panel" ref="mainPanel" style={mainPanelWidth}>
          <Switch>
            {/* {logincontainerRoutes.map((prop, key) => {  
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })} */}
            <Router>
              <Route path="/" component={LoginContainer}>
                <Route path="/dashboard" component={Dashboard} />
                {/* <Route path="inbox" component={Inbox}>
                  <Route path="messages/:id" component={Message} />
                </Route> */}
              </Route>
            </Router>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Logincontainer;
