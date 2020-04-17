// import React, {Component} from 'react';
// // import axios from 'axios';
// import './App.css';
// // import './components/AppTest.jsx'

// class App extends Component {
//   constructor(props){
//     super(props);
//     // define this state and take it down to render: in {} braces
//      // this is basically a dictionary like in python: key:value
//     this.state = {
//       // dragons: [],
//       // capsules: [],
//       launches: [],

//         // monsters: [ ],
//         // isLoading: false,
//         // drinks:[],

//       // articles: [https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a https://hn.algolia.com/api/v1/search?query=]
//     };
//   }


//   componentDidMount() {
//     // fetch("https://hn.algolia.com/api/v1/search?query=")
//     fetch('https://api.spacexdata.com/v3/launches')
//     // .then(response => console.log(response.json()))
//     .then(response => response.json())
//     .then(data => this.setState({launches:data}));


//   }


//   render() {
//   return (
//     <>
//      <h1> SpaceX Capsules by Serial Numbers:   </h1> 
//       { 
       
        
//         this.state.launches.map(launch=>
//           <>
          
//           <div classname='App'> 
//           <h2>  {launch.flight_number} </h2> 
//             {/* <h3> {dragon.id}</h3> */}
//             {/* <h3> Serial Number: {capsule.capsule_serial}</h3> */}
//             <h3> Capsule ID:  {launch.capsule_id}</h3>
//             <h3> Status:  {launch.status}</h3>
//             <h3> Landings: {launch.landings}</h3>
//             <h3> Type: {launch.type}</h3>
//             <h3> Details : {launch.details}</h3>
//             </div> 
//           </>
//           )
          
//       }
     
    



   
//         </>
//   )
//   }

// }
// export default App;





import React, {Component} from 'react';
// import axios from 'axios';
import './App.css';
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
    <input 
    type="search" 
    placeholder="spacex launches" 
    onChange={e=>this.setState({searchField: e.target.value})}/>

      <SpaceXlist launches={filteredLaunches}/>
      {/* <SpaceXlist launches={this.state.launches}/> */}
    </div>
    </>
  )
  }
}

export default App;


