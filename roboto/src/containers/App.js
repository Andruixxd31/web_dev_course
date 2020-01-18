import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component { //every component that has state uses the class syntax and can use the constructor.
  constructor(){ //The constructor create the state
    super()
    //state is an object with the description of an appplication.
    //the state will have a robot array and a searchfield
    //the state will be passed to other components so the components can comunicate with other
    //In this case searchfield with the cardlist
    this.state = {
      robot:[], //these are passed as props
      searchfield: ''
    }
  }

  componentDidMount(){ //Method of mounting. Useful for loading data from a remote point
    fetch("https://jsonplaceholder.typicode.com/users") //gets the a tobot file online to get the atributes of robots which will be loaded by the cardlist
    .then(Response => Response.json()) 
    .then(users => this.setState({robot: users}))
  }



  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render(){ //render always has to return something. 
    
    const {robot, searchfield} = this.state;

    //Functions created must be arrow functions in React
    const filteredRobots = robot.filter(robot => { //Filtering based on what is typed on searchfield
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //the search in lower case being compare to the robot name in lowercase
    })
    return robot.lenght ?
      <h1>Loading</h1> :
      (
        <div className="tc">
        <h1 className = "f1">Robotos</h1>
        <SearchBox searchChange={this.onSearchChange} />  
        <Scroll>
          <CardList robot={filteredRobots}/> 
        </Scroll> {/*In this case Cardlist will be a children of scroll. USing props.children we will have an object of type cardlist */}
        </div>
      ); //the robots from the filteredRobots are rendered
    }
  }

//exporting the component. This will make it able to be imported to other files.
//This component will be import to index.js
export default App; 