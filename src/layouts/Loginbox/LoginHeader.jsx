import React from 'react';
import "../../assets/css/newcss/GLmain.css";
class LoginHeader extends React.Component {
    render() {
        return (
            <div className="center">
                <h1 className="h1Size">
                    <i className="ace-icon widthchange fa fa-leaf green"></i>
                    <span className="red">Marvel </span>
                    <span className="white" id="id-text2">Reports</span>
                </h1>
                <h4 className="blue lineHeight5px" id="id-company-text">&copy; Global Logic</h4>
            </div>
        )
    }
}
export default LoginHeader