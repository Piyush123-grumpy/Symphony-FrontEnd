import React from 'react';
import guitar from '../../assets/guitar.jpeg'
import './productimage.css'
function Productimage(props) {
    return (
        <div className=''>
            <div className="single-pro-image">
                <img src={props.product.image} alt="" />
            </div>
        </div>
    );
}

export default Productimage;