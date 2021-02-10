import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      currPage: "Home"
    }
  }

  changeCurrPage = (newCurrPage) => {
    console.log(newCurrPage)
    this.setState({
      currPage: newCurrPage,
    })
  }

  renderPage = () => {
    if(this.state.currPage === "Contact"){
      return <Contact/>
    } else if(this.state.currPage === "About Me") {
      return <About/>
    }
  }
  
  greeting = (name) => {
    alert('Hello ' + name + '!');
  }
  
  processUserInput = (callback) => {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  render() {
    return (
      <div className="App">
        <Navbar changeCurrPage = {this.changeCurrPage}/>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
