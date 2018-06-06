// import React from 'react';
// import Header from './Header';
// import Body from './Body';
// import Footer from './Footer';
// class App extends React.Component {
//    render() {
//       return (
//          <div className="no-skin">
//            <Header/>
//           <Body/>
//           <Footer/>
//          </div>
//       );
//    }
// }
// export default App;

import React from 'react';
import LoginContainer from './login/LoginContainer'
class App extends React.Component {
  render() {
    return (
      
                <LoginContainer/>
               
    );
  }
}
export default App;