import React from 'react';
import './App.css';

// Components
import Header from './components/Header'
import Home from './components/Home'
import UserProfile1 from './components/UserProfile1';
import UserProfile2 from './components/UserProfile2';
import UserProfile3 from './components/UserProfile3';


// React-Router
// "BrowserRouter as Router" allows me to rename BrowserRouter to Router for simplicity
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        {/* "exact" keyword is used to specify an empty path */}
        <Route path='/' exact component={Home} /> 
        <Route path='/friend-1' component={UserProfile1} />
        <Route path='/friend-2' component={UserProfile2} />
        <Route path='/friend-3' component={UserProfile3} />
      </Switch>
      
    </Router>
  );
}

export default App;
