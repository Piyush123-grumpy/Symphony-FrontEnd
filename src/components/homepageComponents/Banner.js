import React from 'react';
import './banner.css'

function Banner(props) {
    return (
        <div className='banner'>
            <h4>Repair Services</h4>
            <h2>Up to 30% off on all instrunments</h2>
            <button className='normal'>Explore More</button>
        </div>
    );
}

export default Banner;