import React, {Component} from 'react';
// import axios from 'axios';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SearchBox} from './components/searchbox/searchbox.jsx';
import { Jumbotron, Container } from 'react-bootstrap';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText, MDBBtn } from "mdbreact";
import {SpaceXlist} from './components/spacex-list/spacex-list.jsx';
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
    <div className="App"> 

    {/* <input 
    className='search'
    type="search" 
    placeholder='search launches'
    onChange={e=>this.setState({searchField: e.target.value})}/> */}
    
    <Jumbotron fluid>
  <Container>
    <h1>Search Previous Missions</h1>
    
    <SearchBox
                className='search'
                placeholder=' mission names'
                handleChange={this.handleChange}
                />


<h1> SpaceX
                         <br></br>
                          Launch Manifest</h1>
                <p>
                2006 - 2019
                </p>

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
  </Container>
  {/* <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://cdn.vox-cdn.com/thumbor/1-YAlR7xGDpi7YnPLvX8lAza5HM=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20033175/spacex.jpg)` }}>
    </MDBCol> */}
</Jumbotron>

{/* <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theverge.com%2F2020%2F6%2F13%2F21290081%2Fspacex-starlink-satellite-launch&psig=AOvVaw1y0DMVGUNvwqJl9G2_5R8q&ust=1609795908633000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDWxJzbgO4CFQAAAAAdAAAAABAK)` }}>
            <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
                <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer> */}

    <div className="spacex-dates"> 
      <h1> 
        
        </h1> 

      
    </div>
   
      <SpaceXlist launches={filteredLaunches}/>
      
      {/* <SpaceXlist launches={this.state.launches}/> */}

      
    </div>
    {/* <New/> */}
   
    
    </>
  )
  }
}

export default App;


