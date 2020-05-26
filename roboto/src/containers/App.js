import React, { Component } from 'react';
import { connect } from 'react-redux'; //it conects fucntions with the state
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestRobots } from '../actions.js';

// The searchfield is going to be pass as props
const mapStateToProps = state => {
  return { 
    searchField: state.searchRobots.searchField, 
    robots: state.requestRobots.robots, 
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

//dispatch triggers the actions
const mapDispatchToProps = (dispatch) => {
  //prop
  return { 
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)), 
    onRequestRobots:() => dispatch(requestRobots()) //thunkMiddleware needs a function as input
  }
}

class App extends Component { //every component that has state uses the class syntax and can use the constructor.
  
  // with redux we dont need the constructor, there are no more states
  // constructor(){ //The constructor create the state
  //   super()
    //state is an object with the description of an appplication.
    //the state will have a robot array and a searchfield
    //It will be passed to other components so the components can comunicate with other
    //In this case searchfield with the cardlist
  //   this.state = {
  //     robots:[] //these are passed as props
  //     searchfield: '' With redux we can remove this prop
  //   }
  // }

  componentDidMount(){ //Method of mounting. Useful for loading data from a remote point
    this.props.onRequestRobots();
  }


  //We dont need this method anymore with redux
  // onSearchChange = (event) => {
  //   this.setState({searchfield: event.target.value})
  // }

  render(){ //render always has to return something. 
    
    const { searchField, onSearchChange, robots, isPending} = this.props;
    //Functions created must be arrow functions in React
    const filteredRobots = robots.filter(robot => { //Filtering based on what is typed on searchfield
      return robot.name.toLowerCase().includes(searchField.toLowerCase()); //the search in lower case being compare to the robot name in lowercase
    })
    
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className="tc">
        <h1 className = "f1">Robotos</h1>
        <SearchBox searchChange={onSearchChange} />  
        <Scroll>
          <ErrorBoundry> {/* If anything in the Cardlist fails is gonna catch it and display it*/}
            <CardList robots={filteredRobots}/> 
          </ErrorBoundry>
        </Scroll> {/*In this case Cardlist will be a children of scroll. USing props.children we will have an object of type cardlist */}
        </div>
      ); //the robots from the filteredRobots are rendered
    }
  }

//exporting the component. This will make it able to be imported to other files.
//This component will be import to index.js
//App is now subcribed to the redux store 
//mapStateProps is where connect will listen to a part of the state 
//mapDispathToProps will get the actions
//both are passed to App
export default connect(mapStateToProps, mapDispatchToProps)(App); //connect is a higher order function, function that returns another function
