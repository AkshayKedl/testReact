import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

import ReactGA from "react-ga4";

function App() {
  useEffect(()=> {
    ReactGA.initialize("G-BYLBJ952VH");
  },[])
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Welcome</h1>
      </header>
    </div>
  );
}

export default App;
