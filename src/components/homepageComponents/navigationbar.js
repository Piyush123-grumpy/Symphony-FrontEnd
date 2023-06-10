import logo from '../../assets/logo.png'
import './navigationbar.css'
import Branding from './branding'
import { useState } from 'react'
import {Link} from 'react-router-dom'
function Navigationbar() {
    const [active, setActive] = useState(true)


    return (
        <>
            <div className="container">
                <div className='img-container'>
                    <img className='logoimg' src={logo} alt="" />

                </div>
                <Branding></Branding>
                <div className='responsive'>
                    <div className='hamburger' onClick={() => setActive(!active)}>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    <nav className={active ? "nav-bar active" : "nav-bar"}>
                        <ul className={active ? "content" : ''}>
                            <li><Link to="/">SHOP</Link></li>
                            <li><Link to="/shipping">CHECKOUT</Link></li>
                            <li><Link to="/cart">CART</Link></li>
                            <li><a href="/">RETURN</a></li>
                            <li><a href="/">REFUND & EXCHANGES</a></li>
                            <li><a href="/">OUR BLOGS</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )
}
export default Navigationbar