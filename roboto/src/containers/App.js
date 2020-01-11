import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      robot:[], 
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json()) 
    .then(users => this.setState({robot: users}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
 
  render(){
    const {robot, searchfield} = this.state;
    const filteredRobots = robot.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return robot.lenght ?
      <h1>Loading</h1> :
      (
        <div className="tc">
        <h1 className = "f1">Robotos</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robot={filteredRobots}/>
        </Scroll>
        </div>
      );
    }
  }

export default App;