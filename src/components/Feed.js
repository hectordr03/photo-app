// Image and caption/comment section
// ***** Comment section is DYNAMIC *****

import React from 'react';

// Bootstrap Image tag
import Image from 'react-bootstrap/Image'

// Bootstrap grid system
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

// Images
import profilePic from '../assests/images/profile-pic.png'
import img1 from '../assests/images/img1.jpg'
import img2 from '../assests/images/img2.jpg'
import img3 from '../assests/images/img3.jpg'
import img4 from '../assests/images/img4.jpg'
import img5 from '../assests/images/img5.jpg'
import img6 from '../assests/images/img6.jpg'
import img7 from '../assests/images/img7.jpg'
import img8 from '../assests/images/img8.jpg'

class Feed extends React.Component {
    render () {
        return(
            <div className='feed'>
                {/* <Image src={img1} fluid className='feed-images'/>
                <div className='captionBox'>
                    <Image src={profilePic} roundedCircle id='caption-profile-pic' />
                    <p id='caption'>Here is a picture of a man on a seat</p>
                </div> */}
                
                <img src={img1} className='images' />
                <img src={img2} className='images'/>
                <img src={img3} className='images'/>

                <img src={img4} className='images'/>
                <img src={img5} className='images'/>
                <img src={img6} className='images'/>

                <img src={img7} className='images'/>
                <img src={img8} className='images'/>
                <img src={img8} className='images'/>

            </div>
        )
    }
}

export default Feed;