import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants'

import { decrypt, encrypt } from "../crypto/encrypt-decrypt";


export const addToCart = (id, qty) => async (dispatch, getState) => {

    const {
        userLogin: { userInfo },
    } = getState()

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
        },
    }

    const { data } = await axios.get(`http://localhost:5000/product/${id}`)

    const product = encrypt(data._id)
    const name = encrypt(data.name)
    const price = encrypt(String(data.price))
    const countInStock = encrypt(String(data.countInStock))

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: product,
            name: name,
            image: data.image,
            price: price,
            countInStock: countInStock,
            qty: qty
        }
    })

    const products = {
        product:[{product: data._id,
        name: name,
        image: data.image,
        price: price,
        countInStock: countInStock,
        qty: encrypt(String(qty)) }],
    }

    const response = await axios.post(`http://localhost:5000/cart`,products, config)


    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id

    })
    const {
        userLogin: { userInfo },
    } = getState()

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,
        },
    }
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

    const response = await axios.delete(`http://localhost:5000/cart/${decrypt(id)}`,config)

}

export const saveShippingAddress = (data) => async (dispatch, getState) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data

    })
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => async (dispatch, getState) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data

    })
    localStorage.setItem('paymentMethod', JSON.stringify(data))
}