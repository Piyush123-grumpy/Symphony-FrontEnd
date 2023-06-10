import './branding.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Branding() {

    const cart = useSelector((state) => state.cart)

    let qty=0
    cart.cartItems.map((e)=>{qty+=Number(e.qty)})

    return (
        <>
            <div className='wrap'>
                <div className='slogan'>
                    <h2><Link to='/'>Symphony</Link> </h2>
                    <div style={{ marginLeft: 20 }}>"Connecting souls through music"</div>
                </div>
                <div className='header-right'>
                    <div>
                        <input type="text" />
                        <button><FontAwesomeIcon className='magnify' icon={faMagnifyingGlass} /></button>
                        <span> <i class="fa fa-heart-o" style={{ fontSize: 20 }}></i></span>
                        <span className='badge' >0</span>
                        <Link to='/cart'>
                            <i class="fa fa-shopping-cart" style={{ fontSize: 20 }}></i>

                        </Link>
                        <span className='badge' >{qty}</span>

                    </div>


                </div>

            </div>


        </>

    )
}

export default Branding