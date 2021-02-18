import React, {Component} from 'react';

// import {Switch, Route} from 'react-router-dom';
// import './../App.css';
import './../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SearchBox} from './searchbox/searchbox.jsx';
import { Jumbotron, Container } from 'react-bootstrap';
// !!! import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn } from "mdbreact";
// import { MDBIcon, MDBCol } from "mdbreact";
import {SpaceXlist} from './spacex-list/spacex-list.jsx';
// !!! import FormInput from './components/form-input/form-input.jsx';
//!!!  import {SignInAndSignOut} from './components/sign-in-sign-up.component.jsx';

// import Homepage from './homepage/Homepage';


class newApp extends Component {

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
    
    
    
    
        
       
        <div className="App"> 
    
       
        <Jumbotron fluid>
      <Container>
    
    <h1> SpaceX Launch Manifest</h1>
                    <p> 2006 - 2019 </p>
    
                    
      </Container>
    
      <h2>Search Previous Missions</h2>
        <SearchBox className='search' placeholder=' Search mission names' handleChange={this.handleChange}  />
   
     
    </Jumbotron>
   
        <div className="spacex-dates"> 
          {/* <h1> SpaceX</h1>  */}
         
    
        </div>
          <SpaceXlist launches={filteredLaunches}/>
        </div>


        {/* <Homepage/> */}


        </>
      )
      }
    }
    









export default newApp;