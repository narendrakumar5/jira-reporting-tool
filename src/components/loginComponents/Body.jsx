import React from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
class Body extends React.Component{
    render(){
        
        return(
            <div className="main-container ace-save-state" id="main-container">
            <script type="text/javascript">
                try {
                    $.jgrid.loadState('main-container')
                } catch (e) { }
            </script>
            <SideBar/>
            <MainContainer/>
            </div>
        )
    }
}
export default Body;