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
                {/* Bootstrap image comp for circle image style */}
                <Image src={profilePic} roundedCircle id='header-profile-pic' />

                <h4>Welcome user!</h4>
                
                <ul id='nav'>
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