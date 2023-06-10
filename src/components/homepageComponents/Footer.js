import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css'
import pay from '../../assets/pay.png'
import play from '../../assets/play.jpg'
import app from '../../assets/app.jpg'

function Footer(props) {
    return (
        <div className='footerWrap'>
            <footer className='footer container'>
            <div className="col">
                <img src="" alt="" />
                <h4>Contact</h4>
                <p><strong>Address :</strong>562 Wellington Road,Street 32 San francisco </p>
                <p><strong>Hours :</strong>+01 2222 365/(+91) 01 2345 6789</p>
                <div className="follow">
                    <h4>Follow us</h4>
                    <div className="icon">
                        <i><SocialIcon network="facebook" fgColor='black' bgColor='white' style={{ height: 25, width: 25 }} /></i>
                        <i><SocialIcon network="instagram" fgColor='black' bgColor='white' style={{ height: 25, width: 25 }} /></i>
                        <i><SocialIcon network="pinterest" fgColor='black' bgColor='white' style={{ height: 25, width: 25 }} /></i>
                        <i><SocialIcon network="twitter" fgColor='black' bgColor='white' style={{ height: 25, width: 25 }} /></i>
                        <i><SocialIcon network="youtube" fgColor='black' bgColor='white' style={{ height: 25, width: 25 }} /></i>
                    </div>
                </div>
                <div className="copyright">
                <p>© 2021 Symphony - Html css FrontEnd</p>
            </div>
            </div>
            <div className='col'>
                <h4>About</h4>
                <a href="/">About us</a>
                <a href="/">Delivery Information</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms and Conditions</a>
                <a href="/">Contact us</a>
            </div>
            <div className='col'>
                <h4>My Account</h4>
                <a href="/">Sign In</a>
                <a href="/">View Cart</a>
                <a href="/">My Wishlist</a>
                <a href="/">Track My Order</a>
                <a href="/">Help</a>
            </div>
            <div className='col install'>
                <h4>Install App</h4>
                <p>From App Store or Google Fonts</p>
                <div className="row">
                    <img src={app} alt="" />
                    <img src={play} alt="" />
                </div>
                <p>Secored Follow Link (ctrl+click)</p>
                <img src={pay} alt="" />
            </div>
           
        </footer>

        </div>
        
    );
}

export default Footer;