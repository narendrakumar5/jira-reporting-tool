import Dashboard from "views/Dashboard/Dashboard";
import LoginContainer from '../components/login/LoginContainer'

const logincontainerRoutes = [
  {
    path: "/loginContainer",
    name: "LoginContainer",
    icon: "pe-7s-note2",
    component: LoginContainer
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
