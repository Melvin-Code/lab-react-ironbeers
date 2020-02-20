import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AllBeers from "./components/AllBeers";
import RandomBeer from "./components/RandomBeer";
import AddNewBeer from "./components/AddNewBeer";
import axios from "axios";
import Axios from "axios";
class App extends Component {
  state = {
    allBeers: [],
    ready: false
  };
  

  componentDidMount() {
    this.getAllTheBeer();
    // Axios.get("https://api.nasa.gov/planetary/apod?api_key=IxkHydHwlMx9OEppdprkgRjN1zlJcSOYzrVK6sZB").then(res=>{
    //   console.log(res.data)
    // }) ?
  }
  getAllTheBeer = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(res => {
      // console.log(res.data)
      this.setState({
        allBeers: res.data,
        ready: true
      });
    });
  };
  navbars = () => {
    return (
      <nav className="nav-bar">
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </nav>
    );
  };

  render() {
    return (
      <>
        <div className="App">
          {this.navbars()}
          {/* {this.getAllTheBeer()} */}
        </div>
        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />
          <Route
            exact
            path="/beers"
            render={props => (
              <AllBeers
                {...props}
                allBeers={this.state.allBeers}
                ready={this.state.ready}
              />
            )}
          />
          <Route
            exact
            path="/random-beer"
            render={props => <RandomBeer {...props} />}
          />
          <Route
            exact
            path="/new-beer"
            render={props => <AddNewBeer {...props} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
