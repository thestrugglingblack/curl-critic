import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import  NavBar from '../components/navbar/navbar';
import Main from '../components/main/main';

class App extends Component {
  render() {
    return (          
      <div className="App">
      <NavBar/>
      <Main/>
      </div>
    );
  }
}

export default App;
