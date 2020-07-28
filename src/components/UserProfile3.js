import React, { Component } from 'react'

import Col from 'react-bootstrap/Col'

// Images for this profile
import userProfilePic from '../assests/images/friend-3-profile/user-3-profile-pic.jpg'
import img1 from '../assests/images/friend-3-profile/img1.jpg'
import img2 from '../assests/images/friend-3-profile/img2.jpg'
import img3 from '../assests/images/friend-3-profile/img3.jpg'
import img4 from '../assests/images/friend-3-profile/img4.jpg'
import img5 from '../assests/images/friend-3-profile/img5.jpg'
import img6 from '../assests/images/friend-3-profile/img6.jpg'
import img7 from '../assests/images/friend-3-profile/img7.jpg'
import img8 from '../assests/images/friend-3-profile/img8.jpg'
import img9 from '../assests/images/friend-3-profile/img9.jpg'

// From Bootstrap
import Image from 'react-bootstrap/Image'

export default class UserProfile3 extends Component {
    render() {
        return (
            <div className='feed'>

                <div>
                    <Image roundedCircle src={userProfilePic} className='profilePics' />
                    <h2>danielle4e_bgafo's profile</h2>
                </div>

                <div className='photo-grid'>
                    <Col>
                        <img src={img1} alt='' className='images' />
                        <img src={img2} alt='' className='images' />
                        <img src={img3} alt='' className='images' />
                    </Col>
                    <Col>
                        <img src={img4} alt='' className='images' />
                        <img src={img5} alt='' className='images' />
                        <img src={img6} alt='' className='images' />
                    </Col>
                    <Col>
                        <img src={img7} alt='' className='images' />
                        <img src={img8} alt='' className='images' />
                        <img src={img9} alt='' className='images' />
                    </Col>
                </div>

            </div>
        )
    }
}
