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
import EmailSuccess from "./layouts/Loginbox/emailSucess";
import ResetPassword from "./layouts/Loginbox/resetPassword";
// import EmailSuccess from "./components/htmlPages/emailSucess.html";
// import ResetPassword from "./components/htmlPages/resetPassword.html";


import Maps from "./views/Maps/Maps.jsx";
import Notifications from "./views/Notifications/Notifications.jsx";
import TableList from "./views/TableList/TableList.jsx";
import Typography from "./views/Typography/Typography.jsx";
import Upgrade from "./views/Upgrade/Upgrade.jsx";
import UserProfile from "./views/UserProfile/UserProfile.jsx";

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
      <Route path="/Maps"  name= "Maps" component={Maps}/>
      <Route path="/Notifications"  name= "Notifications" component={Notifications}/>
      <Route path="/TableList"  name= "TableList" component={TableList}/>
      <Route path="/Typography"  name= "Typography" component={Typography}/>
      <Route path="/Upgrade"  name= "Upgrade" component={Upgrade}/>
      <Route path="/UserProfile"  name= "UserProfile" component={UserProfile}/>
      <Route path="/emailSuccess"  name= "UserProfile" component={EmailSuccess}/>
      <Route path="/resetPassword"  name= "UserProfile" component={ResetPassword}/>
      </Switch>
  </Router>
</App>), document.getElementById('root'));
