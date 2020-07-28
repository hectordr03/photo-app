// Profile pic, Bookmarked && Friend buttons
// ***** NOT DYNAMIC NOT CHANGING STATE *****

import React from "react";
import "../App.css";

import profilePic from "../assests/images/profile-pic.png";

// Bootstrap imports
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/* Bootstrap image comp for circle image style */}
        <div className="message">
          <Image src={profilePic} roundedCircle id="header-profile-pic" />
          <h4>Welcome StillInNYC!</h4>
        </div>

        <Dropdown className='dropdown'>
          <Dropdown.Toggle>Friends</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='/'>Back Home</Dropdown.Item>
            <Dropdown.Item href='/friend-1'>Friend 1</Dropdown.Item>
            <Dropdown.Item href='/friend-2'>Friend 2</Dropdown.Item>
            <Dropdown.Item href='/friend-3'>Friend 3</Dropdown.Item>
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
