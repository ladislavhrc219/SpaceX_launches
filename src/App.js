import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import NewApp from './components/newApp';
import Header from "./components/header/header.component.jsx";
// import {withRouter} from './react-router-dom';

import SignInAndSignUp from './components/sign-in-sign-up.component/sign-in-sign-up.component.jsx'


// import {
//   BrowserRouter as Router,
//   Link,
//   Switch,
// } from 'react-router-dom';
//!!this is the old
// class App extends Component {

// }
// export default App;

// import React, { Component } from 'react';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//           <Header />
//           <BrowserRouter>
//           <Switch> 
//             <Route path="/signin" component={SignInAndSignUp}> </Route>
//           </Switch>
//           <NewApp />
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

function App (){
  return (
    <div> 
      <Header/>
      <Switch> 

      <Route exact path='/' component={NewApp}/>
      <Route path='/login' component={SignInAndSignUp}/>
    
        {/* <NewApp /> */}
      {/* <Route  path='/newapp' component={NewApp}  /> */}

      </Switch>
    </div>
  )
}


export default withRouter(App);