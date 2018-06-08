import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { HashRouter, Route } from "react-router-dom";
import { Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'

import indexRoutes from "./routes/index.jsx";
// import LoginContainer from './components/login/LoginContainer';
import logincontainer from './layouts/Loginbox/logincontainer';//form layouts
import Dashboard from "./layouts/Dashboard/Dashboard.jsx";
import ForgotBox from "./layouts/Loginbox/ForgotBox.jsx";
import SignUpBox from "./layouts/Loginbox/SignUpBox.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";



// ReactDOM.render(
//   <HashRouter>
//     <Switch>
//       {/* {indexRoutes.map((prop, key) => {
//         return <Route to={prop.path} component={prop.component} key={key} />;
//       })} */}
//       <Route path="/"  name= "Home" component={logincontainer}/>
//       <Route path="/dashboard"  name= "Dashboard" component={Dashboard}/>
//       <Route path="/forgotBox"  name= "Dashboard" component={ForgotBox}/>
//       <Route path="/SignUpBox"  name= "Dashboard" component={SignUpBox}/>
//     </Switch>
//   </HashRouter>,
//   document.getElementById("root")
// );
ReactDOM.render((<App>
  <Router>
      <Switch>
      <Route exact path="/"  name= "Home" component={logincontainer}/>
      <Route path="/dashboard"  name= "Dashboard" component={Dashboard}/>
      <Route path="/ForgotBox"  name= "ForgotBox" component={ForgotBox}/>
      <Route path="/SignUpBox"  name= "SignUpBox" component={SignUpBox}/>
      </Switch>
  </Router>
</App>), document.getElementById('root'));
