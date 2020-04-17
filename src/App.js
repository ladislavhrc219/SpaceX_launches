import React, {Component} from 'react';
// import axios from 'axios';
import './App.css';

// import {SearchBox} from './components/searchbox/searchbox.jsx';

import {SpaceXlist} from './components/spacex-list/spacex-list.jsx';

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

      
      <SpaceXlist launches={filteredLaunches}/>
      {/* <SpaceXlist launches={this.state.launches}/> */}
    </div>
    </>
  )
  }
}

export default App;


