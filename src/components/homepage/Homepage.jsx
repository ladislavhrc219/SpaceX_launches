import React from 'react';
// import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/crown.svg';
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
// import './header.styles.scss';

export const Homepage = () => (
  <div className='header'>
    {/* <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link> */}

    {/* <h1> Navbar and Login Registration </h1> */}

  <BrowserRouter>

    {/* <MDBNav className="justify-content-center"> */}
    <MDBNav className="justify-content-end">
      <MDBNavItem>
        <MDBNavLink active to="#!">SpaceX</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="https://www.google.com">Sign In </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Register</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">To Account </MDBNavLink>
      </MDBNavItem>
    </MDBNav>

  </BrowserRouter>

                        {/* <div className='options'>
                        <Link className='option' to='/shop'>
                            SHOP
                        </Link>
                        <Link className='option' to='/shop'>
                            CONTACT
                        </Link>
                        </div> */}
  </div>
);

// export default Homepage;