import React, {Component, Link} from 'react';
// import axios from 'axios';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SearchBox} from './components/searchbox/searchbox.jsx';
import { Jumbotron, Container } from 'react-bootstrap';
// import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn } from "mdbreact";
import { MDBIcon, MDBCol } from "mdbreact";
import {SpaceXlist} from './components/spacex-list/spacex-list.jsx';


import {Homepage} from './components/homepage/Homepage.jsx';
// import New from "./New";

// import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBCardBody, MDBCardText } from "mdbreact";


// import { Jumbotron, Button } from 'reactstrap';
// import Articles from './components/Articles.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      launches: [],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://api.spacexdata.com/v3/launches')
    .then(response=>response.json())
    .then(data=> this.setState({launches:data}));
  }

  
  handleChange =(e) => {
    this.setState({searchField:e.target.value})
  }

  render() {
    // console.log(this.state);
    // 
    const {launches, searchField} = this.state;
    const filteredLaunches = launches.filter(launch => 
      launch.mission_name.toLowerCase().includes(searchField.toLowerCase())
    )
    // toLoWerCase avoid casesensitivity 

  return (
      
    
    <>

    <Homepage/>
    <div className="App"> 

   
    <Jumbotron fluid>
  <Container>

<h1> SpaceX Launch Manifest</h1>
                <p> 2006 - 2019 </p>

                
  </Container>

  <h2>Search Previous Missions</h2>
    <SearchBox className='search' placeholder=' Seatch mission names' handleChange={this.handleChange}  />
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
 
</Jumbotron>
    <div className="spacex-dates"> 
      <h1> XXX</h1> 

    </div>
      <SpaceXlist launches={filteredLaunches}/>
    </div>
    </>
  )
  }
}

export default App;


