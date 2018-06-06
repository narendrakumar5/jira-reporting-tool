import React from 'react';
import SideBar1 from './SideBar1';
import SideBar2 from './SideBar2';
class SideBar extends React.Component {
    render() {
        return (
            <Col id="sidebar" className="sidebar                  responsive                    ace-save-state">
             <script type="text/javascript">
                try {
                    $.jgrid.loadState('sidebar')
                } catch (e) {}
            </script>
                <SideBar1 />
                <SideBar2 />
                <Col className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
                <i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
            </Col>
            </Col>
        )
    }
}
export default SideBar;