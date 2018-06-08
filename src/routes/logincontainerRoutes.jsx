import Dashboard from "../views/Dashboard/Dashboard";
import LoginContainer from '../layouts/Loginbox/LoginContainer'
import SignUpBox from "../layouts/Loginbox/SignUpBox.jsx";
import ForgotBox from "../views/UserProfile/UserProfile.jsx";

const logincontainerRoutes = [
  {
    path: "/loginContainer",
    name: "LoginContainer",
    icon: "pe-7s-note2",
    component: LoginContainer
  },
  {
    path: "/SignUpBox",
    name: "SignUpBox",
    icon: "pe-7s-note2",
    component: SignUpBox
  },
  {
    path: "/UserProfile",
    name: "UserProfile",
    icon: "pe-7s-note2",
    component: ForgotBox
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  
  
  { redirect: true, path: "/", to: "/loginContainer", name: "LoginContainer" }
];

export default logincontainerRoutes;
