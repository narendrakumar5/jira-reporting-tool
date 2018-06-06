import React from 'react';
class MainContainer extends React.Component{
    render(){
        return(
            <Col className="main-content">
            <Col className="main-content-inner">
                <Col className="breadcrumbs ace-save-state" id="breadcrumbs">
                    <ul className="breadcrumb">
                        <li>
                            <i className="ace-icon fa fa-home home-icon"></i>
                            <a href="#">Home</a>
                        </li>
                        <li className="active">Dashboard</li>
                    </ul>
                     <Col className="nav-search" id="nav-search">
                        <form className="form-search">
                            <span className="input-icon">
									<input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" autoComplete="off" />
									<i className="ace-icon fa fa-search nav-search-icon"></i>
								</span>
                        </form>
                    </Col>
                </Col>

                <Col className="page-content">

                    <Col className="page-header">
                        <h1>
								Dashboard
								<small>
									<i className="ace-icon fa fa-angle-double-right"></i>
									overview &amp; stats
								</small>
							</h1>
                    </Col>

                </Col>
            </Col>
        </Col>
        )
    }
}
export default MainContainer;