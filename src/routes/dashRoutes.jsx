import React,{Component} from 'react';
import {Route} from 'react-router';


// import Dashboard from "../views/Dashboard/Dashboard";
// import UserProfile from "../views/UserProfile/UserProfile";
// import TableList from "../views/TableList/TableList";
// import Typography from "../views/Typography/Typography";
// import Icons from "../views/Icons/Icons";
// import Maps from "../views/Maps/Maps";
// import Upgrade from "../views/Upgrade/Upgrade";

import Dashboard from "../views/Dashboard/Dashboard";
import LoginContainer from '../layouts/Loginbox/logincontainer'
import Maps from "../views//Maps/Maps";
import Notifications from "../views//Notifications/Notifications";
import TableList from "../views//TableList/TableList";
import Typography from "../views//Typography/Typography";
import Upgrade from "../views//Upgrade/Upgrade";
import UserProfile from "../views//UserProfile/UserProfile";

class dashRoutes extends Component {
    render(){
        return (
            <div>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/Maps"  name= "Maps" component={Maps}/>
                <Route path="/Notifications"  name= "Notifications" component={Notifications}/>
                <Route path="/TableList"  name= "TableList" component={TableList}/>
                <Route path="/Typography"  name= "Typography" component={Typography}/>
                <Route path="/Upgrade"  name= "Upgrade" component={Upgrade}/>
                <Route path="/UserProfile"  name= "UserProfile" component={UserProfile}/>
            </div>
        );
    }
}

export default dashRoutes;
