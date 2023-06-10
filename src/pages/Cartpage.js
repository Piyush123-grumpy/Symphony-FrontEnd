import React, { useEffect } from 'react';
import './cartpage.css'
import Header from '../components/homepageComponents/header';
import Carttable from '../components/cartpageComponents/Carttable';
import Subtotal from '../components/cartpageComponents/Subtotal';
import Navigationbar from '../components/homepageComponents/navigationbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'
import { useSearchParams } from "react-router-dom";
import Footer from '../components/homepageComponents/Footer';




function Cartpage({ location }) {
    const [searchParams] = useSearchParams();
    const qty = searchParams.get('qty')
    const { id } = useParams();
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))

        }
    }, [dispatch, id, qty])


    return (
        <div>
            <div className="wrapper">
                <Header></Header>
                <Navigationbar></Navigationbar>
                <Carttable cartItems={cartItems} qty={qty}></Carttable>

            </div>

            <Subtotal cartItems={cartItems} qty={qty}></Subtotal>
            <Footer></Footer>
        </div>
    );
}

export default Cartpage;