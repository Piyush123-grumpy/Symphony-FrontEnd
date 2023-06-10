import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import Header from '../components/homepageComponents/header';
import Navigationbar from '../components/homepageComponents/navigationbar';
import Footer from '../components/homepageComponents/Footer';
import { savePaymentMethod } from '../actions/cartActions';
import './shippingPage.css'
function Payment(props) {
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress){
        navigate('/shipping')
    }

    const [paymentMethod,setPaymentMethod]=useState('payment')




    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            console.log("ss")
            navigate('/login')
        }
    }, [userInfo, dispatch])

    const submitHandler=(e)=>{
        console.log('s')
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }

    return (
        <div>
            <div className="wrapper">
                <Header></Header>
                <Navigationbar></Navigationbar>

            </div>
            <div className="container" id='ship-cont'>
                <h3>Payment Method</h3>
                
                <form onSubmit={submitHandler} class="">
                    <h4>Select Payment Method</h4>

                    <input value="PayPal" name="paymentMethod" onChange={(e)=>setPaymentMethod(e.target.value)} id="payment" type="radio"/>
                    <label for="payment">Paypal or Credit</label><br></br>
                    <div style={{ marginLeft: 50, padding: 20 }} class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <button class="shadow bg-black hover:bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Continue
                            </button>
                        </div>
                    </div>
                </form>

            </div>

            <Footer></Footer>
        </div>
    );
}

export default Payment;