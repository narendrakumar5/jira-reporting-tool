import React from 'react';
class SideBar2 extends React.Component{
    render(){
        return(
            <ul className="nav nav-list">
            <li className="active">
                <a href="index.html">
                    <i className="menu-icon fa fa-tachometer"></i>
                    <span className="menu-text"> Dashboard </span>
                </a>
                <b className="arrow"></b>
            </li>
            <li className="">
                <a href="#" className="dropdown-toggle">
                    <i className="menu-icon fa fa-desktop"></i>
                    <span className="menu-text">
                            UI &amp; Elements
                        </span>
                    <b className="arrow fa fa-angle-down"></b>
                </a>
                <b className="arrow"></b>
                <ul className="submenu">
                    <b className="arrow"></b>
                    <ul className="submenu">
                       <li className="">
                            <a href="top-menu.html">
                                <i className="menu-icon fa fa-caret-right"></i> Top Menu
                            </a>
                            <b className="arrow"></b>
                        </li>
                        <li className="">
                            <a href="two-menu-1.html">
                                <i className="menu-icon fa fa-caret-right"></i> Two Menus 1
                            </a>
                            <b className="arrow"></b>
                        </li>
                        <li className="">
                            <a href="two-menu-2.html">
                                <i className="menu-icon fa fa-caret-right"></i> Two Menus 2
                            </a>
                            <b className="arrow"></b>
                        </li>
                        <li className="">
                            <a href="mobile-menu-1.html">
                                <i className="menu-icon fa fa-caret-right"></i> Default Mobile Menu
                            </a>
                            <b className="arrow"></b>
                        </li>
                        <li className="">
                            <a href="mobile-menu-2.html">
                                <i className="menu-icon fa fa-caret-right"></i> Mobile Menu 2
                            </a>
                            <b className="arrow"></b>
                        </li>
                        <li className="">
                            <a href="mobile-menu-3.html">
                                <i className="menu-icon fa fa-caret-right"></i> Mobile Menu 3
                            </a>
                            <b className="arrow"></b>
                        </li>
                    </ul>
            

            <li className="">
                <a href="treeview.html">
                    <i className="menu-icon fa fa-caret-right"></i> Treeview
                </a>

                <b className="arrow"></b>
            </li>

            <li className="">
                <a href="#" className="dropdown-toggle">
                    <i className="menu-icon fa fa-caret-right"></i> Three Level Menu
                    <b className="arrow fa fa-angle-down"></b>
                </a>

                <b className="arrow"></b>

                <ul className="submenu">
                    <li className="">
                        <a href="#">
                            <i className="menu-icon fa fa-leaf green"></i> Item #1
                        </a>

                        <b className="arrow"></b>
                    </li>

                    <li className="">
                        <a href="#" className="dropdown-toggle">
                            <i className="menu-icon fa fa-pencil orange"></i> 4th level
                            <b className="arrow fa fa-angle-down"></b>
                        </a>

                        <b className="arrow"></b>

                        <ul className="submenu">
                            <li className="">
                                <a href="#">
                                    <i className="menu-icon fa fa-plus purple"></i> Add Product
                                </a>

                                <b className="arrow"></b>
                            </li>

                            <li className="">
                                <a href="#">
                                    <i className="menu-icon fa fa-eye pink"></i> View Products
                                </a>

                                <b className="arrow"></b>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            </ul>
            </li>

            <li className="">
                <a href="#" className="dropdown-toggle">
                    <i className="menu-icon fa fa-list"></i>
                    <span className="menu-text"> Tables </span>

                    <b className="arrow fa fa-angle-down"></b>
                </a>

                <b className="arrow"></b>

                <ul className="submenu">
                    <li className="">
                        <a href="tables.html">
                            <i className="menu-icon fa fa-caret-right"></i> Simple &amp; Dynamic
                        </a>

                        <b className="arrow"></b>
                    </li>

                    <li className="">
                        <a href="jqgrid.html">
                            <i className="menu-icon fa fa-caret-right"></i> jqGrid plugin
                        </a>

                        <b className="arrow"></b>
                    </li>
                </ul>
            </li>

        
        </ul>
        )
    }
}
export default SideBar2;