// Profile pic, Bookmarked && Friend buttons
// ***** NOT DYNAMIC NOT CHANGING STATE *****

import React from "react";
import "../App.css";

import profilePic from "../assests/images/profile-pic.png";

// Components
import Home from '../components/Home';
import UserProfile1 from '../components/UserProfile1';
import UserProfile2 from '../components/UserProfile2';
import UserProfile3 from '../components/UserProfile3';

// Bootstrap imports
import Image from "react-bootstrap/Image";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Switch from "react-bootstrap/esm/Switch";

// React Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/* Bootstrap image comp for circle image style */}
        <div className="message">
          <Image src={profilePic} roundedCircle id="header-profile-pic" />
          <h4>Welcome StillInNYC!</h4>
        </div>

        <Router>
          <Switch>
            {/* "exact" keyword is used to specify an empty path */}
            <Route path='/home' exact component={Home} />
            <Route path='/friend-1' component={UserProfile1} />
            <Route path='/friend-2' component={UserProfile2} />
            <Route path='/friend-3' component={UserProfile3} />
          </Switch>
        </Router>


        <Dropdown>
          <Dropdown.Toggle>Friends</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='/friend-1'>Friend 1</Dropdown.Item>
            <Dropdown.Item>Friend 2</Dropdown.Item>
            <Dropdown.Item>Friend 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <ul id="nav">
          <a className="nav-item" href="#">
            <li>Friends</li>
          </a>
          <a className="nav-item" href="#">
            <li>Bookmarks</li>
          </a>
        </ul> */}
      </div>
    );
  }
}

export default Header;
