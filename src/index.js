import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";
import LoginContainer from './components/login/LoginContainer'
import Dashboard from "./layouts/Dashboard/Dashboard.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";



ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* {indexRoutes.map((prop, key) => {
        debugger
        return <Route to={prop.path} component={prop.component} key={key} />;
      })} */}
      <Route path="/"  name= "Home" component={LoginContainer}/>
      <Route path="/dashboard"  name= "Dashboard" component={Dashboard}/>
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
