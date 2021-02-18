// import React from 'react';
// // import { BrowserRouter, Route, Link } from "react-router-dom";
// import { ReactComponent as Logo } from './../../assets/SpaceX_logo_blackwhite.svg';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Switch
// } from 'react-router-dom';
// import SignInAndSignUp from './../sign-in-sign-up.component/sign-in-sign-up.component';

// import './header.style.css';

// const Header = () => (
//   <div className='header'>
//     <Router>
//       <Link className='logo-container' to='/'>
//         <Logo className='logo' />
//       </Link>
//        <div className='options'>
    
//         <Route> 
//               <Link className='option' to='/'>
//                 SpaceX
//               </Link>
//               <Link className='option' to='/'>
//                 Tesla
//               </Link>
//               <Link className='' to='/'>
//                 Sign
//               </Link>
//           </Route>
  
//     </div>

// </Router>  

//   </div>
// );

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/SpaceX_logo_blackwhite.svg';

import './header.styles.css';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/login'>
        Login
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
    </div>
  </div>
);

export default Header;