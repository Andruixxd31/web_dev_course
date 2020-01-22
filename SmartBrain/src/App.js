import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({ //api for face detection
  apiKey: '7f59bc6ebedd44b1a53b557a489d76e0'
});

const particlesOption = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component { //changed to function to a class to use de constructor
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: '', 
      box: {}
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict(
    Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
    }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  render() {
  return (
    <div className = "App">
      <Particles className='particles' 
        params={particlesOption}
      />
      <Navigation/>
      <Logo/>
      <Rank />
      <ImageLinkForm 
      onInputChange = {this.onInputChange}  
      onButtonSubmit = {this.onButtonSubmit}
      /> {/* Will get the lik input*/}
      <FaceRecognition box={this.state.box} imageURL={this.state.imageURL}/>
    </div>
  );
  }
}

export default App;
