import React from 'react';
import './App.css';

// Components
import Header from './components/Header'
import Feed from './components/Feed'

// React-Router
// "BrowserRouter as Router" allows me to rename BrowserRouter to Router for simplicity
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Feed />
      
    </div>
  );
}

export default App;
