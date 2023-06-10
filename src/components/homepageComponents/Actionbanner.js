import React from 'react';
import './actionbanner.css'
function Actionbanner(props) {
    return (
        <div className='BannerContainer container'>
            <div className='banner-box '>
                <h4>Crazy deals</h4>
                <h2>Best Mantra Guitars</h2>
                <span>The best instrument to sooth souls</span>
                <button className='white'>Learn More</button>
            </div>
            <div className='banner-box banner-box2'>
                <h4>Ukelele</h4>
                <h2>Best Ukelele</h2>
                <span>The best ukelele in town</span>
                <button className='black'>Learn More</button>
            </div>


        </div>

    );
}

export default Actionbanner;