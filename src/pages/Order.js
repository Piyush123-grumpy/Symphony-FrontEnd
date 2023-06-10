import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/homepageComponents/header';
import Navigationbar from '../components/homepageComponents/navigationbar';
import Footer from '../components/homepageComponents/Footer';
import './order.css'
import { Link, useNavigate } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import { ORDER_CREATE_RESET } from '../constants/orderConstants'
import { USER_DETAILS_RESET } from '../constants/userConstants'

function Order(props) {

    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    cart.itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )

    const orderCreate = useSelector((state) => state.orderCreate)

    const { order, success, error } = orderCreate


    console.log(cart.shippingAddress.id)
    console.log(cart.cartItems)


    const placeOrderHandler = (e) => {
        e.preventDefault()
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            totalPrice: cart.itemsPrice
        }))
    }

    useEffect(() => {
        if (success) {
            console.log("hit")
            dispatch({ type: USER_DETAILS_RESET })
            dispatch({ type: ORDER_CREATE_RESET })

            navigate('/')
        }
    }, [success])



    return (
        <>
            <div className="wrapper">
                <Header></Header>
                <Navigationbar></Navigationbar>
            </div>
            <div className="container grid md:grid-cols-3" id='details'>
                <div className='col1 md:col-span-2'>
                    <div>
                        <h4>Shipping</h4>
                        <p>
                            <strong>Address:</strong>
                            {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                            {cart.shippingAddress.postalCode},{' '}
                            {cart.shippingAddress.country}
                        </p>
                        <hr />
                    </div>
                    <div>
                        <h4>Payment Method</h4>
                        <strong>Method: </strong>
                        {cart.paymentMethod}
                        <hr />

                    </div>
                    <div>
                        <h4>Order Items</h4>
                        {cart.cartItems.length === 0 ? (
                            <div>Your cart is empty</div>
                        ) : (
                            <div variant='flush'>
                                {cart.cartItems.map((item, index) => (
                                    <div key={index}>
                                        <div className="container grid md:grid-cols-5">
                                            <div className='md:col-span-1'>
                                                <img className='img'
                                                    src={item.image}
                                                    alt={item.name}
                                                    fluid
                                                    rounded
                                                />
                                            </div>
                                            <div className='md:col-span-1'>
                                                <Link to={`/productDetail/${item.product}`}>
                                                    {item.name}
                                                </Link>
                                            </div>
                                            <div className='md:col-span-3'>
                                                {item.qty} x ${item.price} = ${item.qty * item.price}
                                            </div>
                                        </div>
                                        <hr />

                                    </div>

                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div style={{ backgroundColor: 'white' }} className='md:col-span-1 order-pricing'>
                    <div>
                        <h4>Order Summary</h4>
                    </div>
                    <div>
                        <div className='item-pricing'>
                            <div>Items</div>
                            <div>${cart.itemsPrice}</div>
                        </div>
                        <hr />
                    </div>
                    <div>
                        <div className='item-pricing'>
                            <div>Shipping</div>
                            <div>$ 0.00</div>
                        </div>
                        <hr />

                    </div>
                    <div>
                        <div className='item-pricing'>
                            <div>Tax</div>
                            <div>$ 0.00</div>
                        </div>
                        <hr />

                    </div>
                    <div>
                        <div className='item-pricing'>
                            <div>Total</div>
                            <div>${cart.itemsPrice}</div>
                        </div>
                        <hr />

                    </div>
                    <div>
                        {/* {error && <div variant='danger'>{error}</div>} */}
                    </div>
                    <form onSubmit={placeOrderHandler}>
                        {error ? <div>{error}</div> : <div></div>}
                        <div class="md:w-2/3" style={{ margin: 'auto', width: 125 }}>
                            {cart.cartItems.length === 0 ? <button type='submit' class="bg-black text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                                Place Order
                            </button> : <button class="shadow bg-black hover:bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Place Order
                            </button>}
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Order;