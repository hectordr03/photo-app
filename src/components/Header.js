// Profile pic, Bookmarked && Friend buttons
// ***** NOT DYNAMIC NOT CHANGING STATE *****

import React from 'react';
import '../App.css';

import profilePic from '../assests/images/profile-pic.png'
import Image from 'react-bootstrap/Image'

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                {/* Bootstrap image comp */}
                <Image src={profilePic} roundedCircle id='header-profile-pic' />
                
                <ul id='nav'>
                    <a className='nav-item'>
                        <li>Friends</li>
                    </a>
                    <a className='nav-item'>
                        <li>Bookmarks</li>
                    </a>
                </ul>
            </div>
        )
    }
}

export default Header;