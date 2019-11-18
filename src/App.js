import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios" 
import {Switch, Link, Route} from "react-router-dom"

class App extends Component {

componentDidMount() {
  this.getAllBeers();
}

getAllBeers = () => {
  axios.get("https://ih-beers-api2.herokuapp.com/beers").then(allTheBeers => {
    console.log(allTheBeers);
  })
}

getRandomBeer = () => {
  axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(randomBeer => {
    console.log(randomBeer);
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
