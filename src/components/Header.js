// Profile pic, Bookmarked && Friend buttons
// ***** NOT DYNAMIC NOT CHANGING STATE *****

import React from 'react';
import '../App.css'

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <h1>Header Component</h1>
                
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