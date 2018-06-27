import React, { Component } from'react';
import './App.css';


let defaultStyle = {
  color: '#fff'
};


class Aggregate extends Component {
  render() {
    return (
      <div 
        h2 style={{...defaultStyle, width: "40%", display: 'inline-block'}}>Number Text
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
          Filter
        </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "20%"}}>
        <img/>
        <h3> Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li><li>Song 4</li><li>Song 5</li></ul>
  </div>

    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={{...defaultStyle, 'font-size': '80px'}}>Title</h1>
      <Aggregate/>
      <Aggregate/> 
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>

      </div>
    );
  }
}

export default App;

