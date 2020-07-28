// Image and caption/comment section
// ***** Comment section is DYNAMIC *****

import React from 'react';

// Bootstrap imports
import Col from 'react-bootstrap/Col'

// Images
import img1 from '../assests/images/img1.jpg'
import img2 from '../assests/images/img2.jpg'
import img3 from '../assests/images/img3.jpg'
import img4 from '../assests/images/img4.jpg'
import img5 from '../assests/images/img5.jpg'
import img6 from '../assests/images/img6.jpg'
import img7 from '../assests/images/img7.jpg'
import img8 from '../assests/images/img8.jpg'
import img9 from '../assests/images/img9.jpg'

class Home extends React.Component {
    render () {
        return(
            <div className='feed'>

                <h2>Your profile</h2>
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

export default Home;