import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/homepageComponents/header';
import Navigationbar from '../components/homepageComponents/navigationbar';
import Footer from '../components/homepageComponents/Footer';
import './order.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getOrderDetails } from '../actions/orderActions';
import axios from 'axios';
import { PayPalButton, PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { payOrder } from '../actions/orderActions';
import { ORDER_PAY_RESET } from '../constants/orderConstants';
import { PayPalCheckoutButton } from '../components/checkoutpageComponents/PaypalCheckoutButton.js'
function OrderDetails(props) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const amount = "2";
    const currency = "USD";
    const style = { "layout": "vertical" };

    const { id } = useParams();



    const orderDetail = useSelector((state) => state.orderDetail)

    const { order, loading, error } = orderDetail

    const orderPay = useSelector((state) => state.orderPay)

    const { loading: loadingPay, success: successPay } = orderPay

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


    if (!loading) {
        //   Calculate prices
        const addDecimals = (num) => {
            return (Math.round(num * 100) / 100).toFixed(2)
        }

        order.itemsPrice = addDecimals(
            order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
        )
    }


    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }

        if (!order || successPay||order._id !== id) {
            dispatch({ type: ORDER_PAY_RESET })
            dispatch(getOrderDetails(id))

        }
    }, [dispatch, id, successPay, order])

    const successPaymentHandler = (id, paymentResult) => {
        console.log(paymentResult)
        dispatch(payOrder(id, paymentResult))
    }



    return loading ? <div>Loading</div> : <>
        <div className="wrapper">
            <Header></Header>
            <Navigationbar></Navigationbar>
        </div>
        <div className="container grid md:grid-cols-3" id='details'>
            <div className='col1 md:col-span-2'>
                <div>
                    <h4>Shipping</h4>
                    <p>
                        <strong>Name: </strong> {order.user.name}
                    </p>
                    <p>
                        <strong>Email: </strong>{' '}
                        <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                    </p>
                    <p>
                        <strong>Address:</strong>
                        {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                        {order.shippingAddress.postalCode},{' '}
                        {order.shippingAddress.country}
                    </p>
                    <hr />
                </div>
                <div>
                    <h4>Payment Method</h4>
                    <p>
                        <strong>Method: </strong>
                        {order.paymentMethod}
                        <p><strong>Payment</strong></p>
                        {order.isPaid ? <p>Paid</p> : <p>Not Paid</p>}

                    </p>

                    <hr />

                </div>
                <div>
                    <h4>Order Items</h4>
                    {order.orderItems.length === 0 ? (
                        <div>Your Order is empty</div>
                    ) : (
                        <div variant='flush'>
                            {order.orderItems.map((item, index) => (
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
                        <div>${order.itemsPrice}</div>
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
                        <div>${order.itemsPrice}</div>
                    </div>
                    <hr />

                </div>
                {!order.isPaid? <PayPalCheckoutButton id={id} price={order.itemsPrice} success={successPaymentHandler} />:<div></div> }
                

                <div>
                    {/* {error && <div variant='danger'>{error}</div>} */}
                </div>
                {/* <form onSubmit={placeOrderHandler}>
                {error ? <div>{error}</div> : <div></div>}
                <div class="md:w-2/3" style={{ margin: 'auto', width: 125 }}>
                    {cart.cartItems.length === 0 ? <button type='submit' class="bg-black text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed">
                        Place Order
                    </button> : <button class="shadow bg-black hover:bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Place Order
                    </button>}
                </div>
            </form> */}
            </div>
        </div>
        <Footer></Footer>
    </>
}

export default OrderDetails;