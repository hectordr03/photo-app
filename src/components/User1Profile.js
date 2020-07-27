import React, { Component } from 'react'

export default class User1Profile extends Component {
    render() {
        return (
            <div className='feed'>
                <h2>Friend profile</h2>
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
