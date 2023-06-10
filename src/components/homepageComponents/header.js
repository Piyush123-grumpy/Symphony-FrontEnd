import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
import { useEffect } from 'react';

function Header() {


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


    const dispatch = useDispatch()


    const logOut=()=>{
        dispatch(logout())
    }

    return (
        <>
            <div className='topheader'>
                <div className='subheader'>
                    <p><FontAwesomeIcon icon={faPhone} />+977 9807564367</p>
                    <p><FontAwesomeIcon icon={faMailBulk} /> sales@symphonyNepal.com</p>
                    <p>Kathmandu, Nepal</p>
                </div>
                <div className='topheader login'>
                    <p><SocialIcon network="facebook" fgColor='black' bgColor='white' style={{ height: 25, width: 25 }} /></p>
                    <p><SocialIcon network="instagram" fgColor='black' bgColor='white' style={{ height: 25, width: 25 }} /></p>
                    {userInfo ? <>
                        <div className='auth_buttons subheader'>

                            <Link to="/profile">{userInfo.name}</Link>
                        </div>
                        <div className='auth_buttons subheader'>

                            <div onClick={logOut} style={{cursor:'pointer'}}>Logout</div>
                        </div>
                    </>
                        : <div className='auth_buttons'>
                            <Link to="/login">Login</Link>
                        </div>}



                </div>
            </div>
        </>
    )
}

export default Header