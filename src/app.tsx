/// <reference path='./png.d.ts' />
import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import logo from '../public/logo.png'; 

type P = {}
type S = {}

class App extends React.PureComponent<P,S> {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/app.jsx</code> and tap.... on the play button.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
