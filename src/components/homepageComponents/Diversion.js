import React from 'react';
import Guitars from '../../assets/Guitars.png'
import './diversion.css'

function Diversion(props) {
    return (
        <div className='diversion'>
            <div className='first-content'>
                <img src={Guitars} alt="" />
            </div>
            <div className='second-content'>
                <h2>About Guitars</h2>
                <p>Symphony Guitar as we call it, The pride of Nepal, is the Nepali brand of guitar, ukulele, bag, string and capo. We take pride in introducing the quality products in Nepali music scenario at an absolutely affordable price range. We believe everyone from beginners and hobbyists to the semi-professional artists and performers deserves fine quality musical instruments to unleash their true potential. Manaslu Guitar is the outcome of months of intensive research on the quality products that best suit the young generation. Gorgeously crafted in China, Mansalu is something all Nepalese can be proud of.

</p>
            </div>
        </div>
    );
}

export default Diversion;