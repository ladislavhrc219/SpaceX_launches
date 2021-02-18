import React from 'react';
// import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../assets/crown.svg';
// import { BrowserRouter } from 'react-router-dom';
import { MDBCol, MDBIcon, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

//!! switch route from this compoeent try that way 
// import './header.styles.scss';

export const Navbar = () => (
  <div className=''>
    {/* <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link> */}

    {/* <h1> Navbar and Login Registration </h1> */}

  {/* <BrowserRouter> */}

    {/* <MDBNav className="justify-content-center"> */}
    <MDBNav className="justify-content-center">
      <MDBNavItem>
        <MDBNavLink active to="{signin}">SpaceX</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="./../form-input/form-input.jsx">Sign In </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Register</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">To Account </MDBNavLink>
      </MDBNavItem>
      <MDBCol className="d-flex justify-content-center mt-4" md="12"> 
                    <MDBCol md="3" className="d-flex justify-content-around">
                      <a href=""><MDBIcon
                        fab
                        icon="linkedin-in"
                        className="grey-text"
                        size="lg"
                      /></a>
                      <a href=""><MDBIcon
                        fab
                        icon="twitter"
                        className="grey-text"
                        size="lg"
                      /></a>
                      
                    </MDBCol>
                  </MDBCol>
    </MDBNav>

  {/* </BrowserRouter> */}

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