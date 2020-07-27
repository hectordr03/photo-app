// Profile pic, Bookmarked && Friend buttons
// ***** NOT DYNAMIC NOT CHANGING STATE *****

import React from 'react';
import '../App.css';

import profilePic from '../assests/images/profile-pic.png'

// Bootstrap imports
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown'

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                {/* Bootstrap image comp for circle image style */}
                <div className='message'>
                    <Image src={profilePic} roundedCircle id='header-profile-pic' />
                    <h4>Welcome user!</h4>
                </div>

                <ul id='nav'>
                    <Dropdown.Menu show>
                        <Dropdown.Header>Friends</Dropdown.Header>
                        <Dropdown.Item eventKey="2">Friend 1</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Friend 2</Dropdown.Item>
                        <Dropdown.Item eventKey="4">Friend 3</Dropdown.Item>
                    </Dropdown.Menu>
                    <a className='nav-item' href='#'>
                        <li>Friends</li>
                    </a>
                    <a className='nav-item' href='#'>
                        <li>Bookmarks</li>
                    </a>
                </ul>
            </div>
        )
    }
}

export default Header;